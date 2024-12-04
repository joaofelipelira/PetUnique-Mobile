import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 
import { MyService } from './my-service.service'; 

describe('MyService', () => {
  let service: MyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [MyService]
    });
    service = TestBed.inject(MyService); 
    httpMock = TestBed.inject(HttpTestingController); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data', () => {
    const mockData = { key: 'value' };

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData); 
    });

    const req = httpMock.expectOne('https://api.exemplo.com/dados');
    expect(req.request.method).toBe('GET');

    // Responder à requisição com os dados simulados
    req.flush(mockData);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se não há requisições pendentes
  });
});