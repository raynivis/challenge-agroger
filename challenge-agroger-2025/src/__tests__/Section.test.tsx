import { render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import Section from '../components/list/section';
import { PontoDeAmostragem } from '../models/ponto-de-amostragem.model';

// mock do serviço
const mockGetSamplingPoints = vi.fn();
vi.mock('../services/ponto-de-amostragem.service', () => ({
  PontoDeAmostragemService: vi.fn(() => ({
    getSamplingPoints: mockGetSamplingPoints
  }))
}));

describe('Section Component - Testes ', () => {
  const mockPontos: PontoDeAmostragem[] = [{
    "@id": "1",
    label: "Ponto Teste",
    area: { "@id": "1", label: "Área Teste" },
    comment: "",
    easting: 0,
    lat: 0,
    long: 0,
    northing: 0,
    notation: "",
    samplingPointStatus: { "@id": "1", label: "open" },
    samplingPointType: { "@id": "1", group: "", label: "" },
    subArea: { "@id": "1", label: "" }
  }];

  beforeEach(() => {
    // Resetar o mock antes de cada teste
    mockGetSamplingPoints.mockReset();
    mockGetSamplingPoints.mockResolvedValue(mockPontos);
  });

  it('1. Não deve fazer requisição quando mostrar=false', () => {
    render(<Section mostrar={false} />);
    expect(mockGetSamplingPoints).not.toHaveBeenCalled();
  });

  it('2. Deve mostrar mensagem de carregamento', async () => {
    // Configura o mock para demorar
    mockGetSamplingPoints.mockImplementation(
      () => new Promise(resolve => setTimeout(() => resolve(mockPontos), 100))
    );

    render(<Section mostrar={true} />);
    
    // Verifica se o loading aparece
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
    
    // aguarda o loading desaparecer
    await waitFor(() => {
      expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();
    });
  });

  it('3. Deve mostrar lista quando há dados', async () => {
    render(<Section mostrar={true} />);
    
    await waitFor(() => {
      expect(screen.getByText('Pontos de Amostragem da Água do Norte de Cumbria - UK')).toBeInTheDocument();
      expect(screen.getByText('Ponto Teste')).toBeInTheDocument();
    });
  });

  it('4. Deve mostrar mensagem quando não há dados', async () => {
    // retornar array vazio
    mockGetSamplingPoints.mockResolvedValue([]);

    render(<Section mostrar={true} />);
    
    await waitFor(() => {
      expect(screen.getByText(/Nenhum ponto de amostragem encontrado/)).toBeInTheDocument();
    });
  });
});