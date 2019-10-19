import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data;
  constructor() { }

  ngOnInit() {
    this.data = {
      documents: [
        {
          "id": 525,
          "name": "Prueba firma",
          "process": "web",
          "created_at": "2019-09-03T16:52:01.454Z",
          "updated_at": "2019-09-03T16:53:04.532Z",
          "user": {
            "id": 121,
            "name": "pruebacorreomf@outlook.com"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 550,
              "name": "Juan"
            }
          ]
        },
        {
          "id": 524,
          "name": "Prueba con registro outlook",
          "process": "web",
          "created_at": "2019-09-03T16:49:45.280Z",
          "updated_at": "2019-09-03T16:50:33.330Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 549,
              "name": "Outlook"
            }
          ]
        },
        {
          "id": 523,
          "name": "notificacion",
          "process": "web",
          "created_at": "2019-09-03T16:35:10.328Z",
          "updated_at": "2019-09-03T16:39:06.502Z",
          "user": {
            "id": 120,
            "name": "pruebacorreomf@gmail.com"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 548,
              "name": "Juan"
            }
          ]
        },
        {
          "id": 522,
          "name": "Prueba con registro",
          "process": "web",
          "created_at": "2019-09-03T16:29:38.880Z",
          "updated_at": "2019-09-03T16:30:39.338Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 547,
              "name": "Gmail"
            }
          ]
        },
        {
          "id": 521,
          "name": "Prueba con registro",
          "process": "web",
          "created_at": "2019-09-03T16:27:47.768Z",
          "updated_at": "2019-09-03T16:28:48.228Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 546,
              "name": "Gmail"
            }
          ]
        },
        {
          "id": 519,
          "name": "Documento prueba 2 firmantes",
          "process": "web",
          "created_at": "2019-09-03T16:10:32.223Z",
          "updated_at": "2019-09-03T16:11:44.831Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 543,
              "name": "Jose Lumbreras"
            },
            {
              "id": 544,
              "name": "ACCEM SERVICIOS EMPRESARIALES SC"
            }
          ]
        },
        {
          "id": 518,
          "name": "Prueba Correo",
          "process": "web",
          "created_at": "2019-09-03T16:05:32.243Z",
          "updated_at": "2019-09-03T16:11:55.639Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 545,
              "name": "Outlook"
            },
            {
              "id": 542,
              "name": "Gmail"
            }
          ]
        },
        {
          "id": 499,
          "name": "Prueba RFC",
          "process": "web",
          "created_at": "2019-09-02T16:12:45.402Z",
          "updated_at": "2019-09-02T16:12:45.402Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 1,
            "name": "Nuevos"
          },
          "sign_requests": [
            
          ]
        },
        {
          "id": 497,
          "name": "Prueba 1",
          "process": "web",
          "created_at": "2019-08-30T16:12:40.851Z",
          "updated_at": "2019-08-30T16:12:40.879Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 522,
              "name": "Francisco Lumbreras"
            },
            {
              "id": 521,
              "name": "Servicio de Administraci\u00f3n Tributaria"
            }
          ]
        },
        {
          "id": 496,
          "name": "Prueba Firma",
          "process": "web",
          "created_at": "2019-08-30T15:14:10.840Z",
          "updated_at": "2019-08-30T15:15:38.587Z",
          "user": {
            "id": 110,
            "name": "roberto.vallecillo@mailinator.com"
          },
          "status": {
            "id": 3,
            "name": "Firmado"
          },
          "sign_requests": [
            {
              "id": 520,
              "name": "Juan"
            }
          ]
        },
        {
          "id": 487,
          "name": "asfafadsfads",
          "process": "web",
          "created_at": "2019-08-28T21:46:58.499Z",
          "updated_at": "2019-08-28T21:46:58.499Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 1,
            "name": "Nuevos"
          },
          "sign_requests": [
            {
              "id": 511,
              "name": "ACCEM SERVICIOS EMPRESARIALES SC"
            }
          ]
        },
        {
          "id": 472,
          "name": "Prueba O",
          "process": "web",
          "created_at": "2019-08-27T16:45:59.870Z",
          "updated_at": "2019-08-27T16:47:37.865Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 496,
              "name": "Prueba O"
            }
          ]
        },
        {
          "id": 471,
          "name": "Prueba G2",
          "process": "web",
          "created_at": "2019-08-27T16:28:43.170Z",
          "updated_at": "2019-08-27T16:29:35.165Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 495,
              "name": "Prueba G2"
            }
          ]
        },
        {
          "id": 470,
          "name": "Prueba de correo",
          "process": "web",
          "created_at": "2019-08-27T16:23:09.282Z",
          "updated_at": "2019-08-27T16:27:08.049Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 494,
              "name": "Prueba G"
            }
          ]
        },
        {
          "id": 467,
          "name": "Documento de prueba ",
          "process": "web",
          "created_at": "2019-08-27T15:13:49.672Z",
          "updated_at": "2019-08-27T15:14:09.771Z",
          "user": {
            "id": 110,
            "name": "roberto.vallecillo@mailinator.com"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 491,
              "name": "Juan"
            }
          ]
        },
        {
          "id": 466,
          "name": "Ambos",
          "process": "web",
          "created_at": "2019-08-27T15:00:49.266Z",
          "updated_at": "2019-08-27T15:00:49.279Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 490,
              "name": "Francisco Lumbreras"
            },
            {
              "id": 489,
              "name": "Servicio de Administraci\u00f3n Tributaria"
            }
          ]
        },
        {
          "id": 465,
          "name": "PDF",
          "process": "web",
          "created_at": "2019-08-27T14:59:52.174Z",
          "updated_at": "2019-08-27T14:59:52.190Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 488,
              "name": "Francisco Lumbreras"
            },
            {
              "id": 487,
              "name": "Servicio de Administraci\u00f3n Tributaria"
            }
          ]
        },
        {
          "id": 464,
          "name": "Markdown",
          "process": "web",
          "created_at": "2019-08-27T14:57:53.073Z",
          "updated_at": "2019-08-27T14:57:53.093Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 486,
              "name": "Francisco Lumbreras"
            },
            {
              "id": 485,
              "name": "Servicio de Administraci\u00f3n Tributaria"
            }
          ]
        },
        {
          "id": 461,
          "name": "Contrato de prueba WEB",
          "process": "web",
          "created_at": "2019-08-27T14:25:52.009Z",
          "updated_at": "2019-08-27T14:25:52.080Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 482,
              "name": "Francisco Lumbreras"
            },
            {
              "id": 481,
              "name": "Servicio de Administraci\u00f3n Tributaria"
            }
          ]
        },
        {
          "id": 460,
          "name": "Contrato de prueba WEB",
          "process": "web",
          "created_at": "2019-08-27T14:24:47.963Z",
          "updated_at": "2019-08-27T14:24:47.982Z",
          "user": {
            "id": 44,
            "name": "ACCEM SERVICIOS EMPRESARIALES SC"
          },
          "status": {
            "id": 2,
            "name": "En proceso"
          },
          "sign_requests": [
            {
              "id": 480,
              "name": "Francisco Lumbreras"
            },
            {
              "id": 479,
              "name": "Servicio de Administraci\u00f3n Tributaria"
            }
          ]
        }
      ],
      "success": true
    }
    
  }

}


