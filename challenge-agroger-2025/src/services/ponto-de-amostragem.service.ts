import axios from 'axios';
import { environment } from './APIenvironment';
import { PontoDeAmostragem } from '../models/ponto-de-amostragem.model';

export class PontoDeAmostragemService {
    async getSamplingPoints(): Promise<PontoDeAmostragem[]> {
        try {
            const response = await axios.get(environment.URL);
            return response.data.items; 
        } catch (error) {
            console.error('Erro ao buscar pontos de amostragem:', error);
            throw error;
        }
    }
}