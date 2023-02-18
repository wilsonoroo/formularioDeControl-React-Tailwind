import React, { useEffect, useState } from 'react'
import dataProactive from './datosProactive.json'
import moment from "moment-timezone";
import imgProactive from "./imgProactive.png"

export const ProactiveLayout = () => {
  moment.locale("es");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(dataProactive)
        setTimeout(() => {
            setLoading(false);
        }, 1000);   
    }, [])

    const { encabezado, fechaCreacion, validadoPor, seccionesRespuestas } = data

    const respuestas = () => {
        if (!loading) {
          return {
            seccionDeRespuestas: Object.values(data.seccionesRespuestas.principale.respuestas),
            cuadrilla: Object.values(data.cuadrilla.integrantes),           
          };
        } else {
          return {
            seccionDeRespuestas: [],
            cuadrilla:[],
          };
        }
    };
    const resultado = respuestas(); 
    console.log(resultado.seccionDeRespuestas)
    // console.log(seccionesRespuestas.observacion.respuestas.p.tipo.opciones.o.valor)
    let fechaValida = fechaCreacion;
    let date = new Date(fechaValida);
    let fecha = date.toLocaleDateString();
    // let hora = date.toLocaleTimeString();

  return (
    <>
      {loading ? <span></span>        
        : 
        <div id="contenedor" className="container p-2">
          <div className="grid-containerP grid-cols-3 border ">
            <div className="h-24 border w-full">
              <div className="grid grid-rows-1 h-full justify-center items-center">
                <img src= {imgProactive} alt="img" />
              </div>
            </div>
            <div className="h-24 border">
              <div className="grid grid-rows-1 h-full text-center w-full items-center">                
                <h1 className="font-bold mb-1" style={{ fontSize: "15pt" }}>
                  {" "}
                  REGISTRO DE COMUNICACIÓN
                </h1>
              </div>
            </div>
            <div className="h-24 border ">
              <div
                className="grid grid-rows-3 h-full "
                style={{ fontSize: "9pt" }}
              >
                <div className="flex mt-2">                  
                  <div className="mx-auto">Código: F-PE-020-CH01</div>
                </div>
                <div className="flex mt-2">
                  <div className="mx-auto text-xs">F. Elab : 01-09-2022 </div>
                </div>
                <div className="flex mt-2">
                  <div className="mx-auto">Revisión 00</div>
                </div>
                
              </div>
            </div>
          </div>

          <div className='border-black mt-2 border-t border-l border-r bg-primaryColorProactive text-white p-1' > ITEM N°1: TIPO DE REGISTRO (Marcar con una X segun corresponda)</div>
          
          <table className='w-full text-left border-l border-r border-t'  >
            <thead >
              <tr >
                {encabezado.tipoDeRegistro ?  (    
                    encabezado.tipoDeRegistro === "Charla" ? (                    
                      <React.Fragment>                    
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Capacitación</th>
                        <th className='border-l border-r w-1/12'></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Charla</th>
                        <th className='border-l border-r w-1/12 text-center'> X </th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Reunión</th>
                        <th className='border-l border-r w-1/12'></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Difusión</th>
                        <th className='border-l  w-1/12'></th>
                      </React.Fragment>      
                    ) : encabezado.tipoDeRegistro === "Capacitación" ? (
                      <React.Fragment>                    
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Capacitación</th>
                        <th className='border-l border-r w-1/12 text-center'>X</th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Charla</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Reunión</th>
                        <th className='border-l border-r w-1/12'></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Difusión</th>
                        <th className='border-l  w-1/12'></th>
                      </React.Fragment>     
                    ) : encabezado.tipoDeRegistro === "Reunión" ? (
                      <React.Fragment>                    
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Capacitación</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Charla</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Reunión</th>
                        <th className='border-l border-r w-1/12 text-center'>X</th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Difusión</th>
                        <th className='border-l  w-1/12'></th>
                      </React.Fragment>     
                    ) : encabezado.tipoDeRegistro === "Difusión" ? (
                      <React.Fragment>                    
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Capacitación</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Charla</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Reunión</th>
                        <th className='border-l border-r w-1/12'></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Difusión</th>
                        <th className='border-l  w-1/12 text-center'>X</th>
                      </React.Fragment>     
                    ) : 
                      <React.Fragment>                    
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Capacitación</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Charla</th>
                        <th className='border-l border-r w-1/12 '></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Reunión</th>
                        <th className='border-l border-r w-1/12'></th>
                        <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Difusión</th>
                        <th className='border-l  w-1/12'></th>
                      </React.Fragment>   
                ) : (
                  <React.Fragment>                    
                  <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Capacitación</th>
                  <th className='border-l border-r w-1/12'></th>
                  <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Charla</th>
                  <th className='border-l border-r w-1/12 text-center'>  </th>
                  <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Reunión</th>
                  <th className='border-l border-r w-1/12'></th>
                  <th className=' w-2/12 bg-primaryColorProactive text-white text-center'>Difusión</th>
                  <th className='border-l  w-1/12'></th>
                </React.Fragment>     
                )}
              </tr>
            </thead>
          </table>

          <table className='w-full text-left'>
            <thead>
              <tr>
                <th className='border-black border w-3/12 bg-primaryColorProactive text-white font-normal'>Fecha</th>
                <th className='border w-3/12 font-normal text-center'> {fecha} </th>
                <th className='border-black border w-3/12 bg-primaryColorProactive text-white font-normal'>Hora de inicio</th>
                <th className='border w-3/12 font-normal text-center'>  {" "}
                  {moment(encabezado.horaInicio)
                    .tz("America/Santiago")
                    .format("h:mm a")}{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border-black border w-3/12 bg-primaryColorProactive text-white'>Relator</td>
                <td className='border w-3/12 text-center' > {validadoPor.displayName} </td>
                <td className='border-black border w-3/12 bg-primaryColorProactive text-white'>Hora de término</td>
                <td className='border w-3/12 text-center'>{" "}
                  {moment(encabezado.horaTermino)
                    .tz("America/Santiago")
                    .format("h:mm a")}{" "}
                  </td>
              </tr>
              <tr>
                <td className='border-black border w-3/12 bg-primaryColorProactive text-white'>Lugar</td>
                <td className='border w-3/12 text-center'> {encabezado.lugarFaena} </td>
                <td className='border-black border w-3/12 bg-primaryColorProactive text-white'>Cargo</td>
                <td className='border w-3/12 text-center'> {validadoPor.cargo} </td>
              </tr>
            </tbody>
          </table>
          
          <div className='border-black border-b border-l border-r bg-primaryColorProactive text-white'>&nbsp; Principales materias o temas, tratados y desarrollados</div>
          { Object.values(resultado.seccionDeRespuestas).map((p, index) => ( 
          <div className='border-l border-r border-b' key={index}> {p.tipo.opciones.o1.valor} </div>
          
          )) }
          <div className='border-black border-l border-r bg-primaryColorProactive text-white p-1'>ÍTEM N°2: PARTICIPANTES</div>
          <table className='w-full '>
            <thead >
              <tr className='border'>
                <th className='W-1/12'>N°</th>
                <th className='W-5/12 border-l border-r'>NOMBRE Y APELLIDOS</th>
                <th className='W-2/12'>CARGO</th>
                <th className='W-2/12 border-l border-r'>RUN</th>
                <th className='W-2/12'>FIRMA</th>
              </tr>
            </thead>
            <tbody className='border text-center'>
            { Object.values(resultado.cuadrilla).map((integrante, index) => ( 
              <tr key={index}>
                <td className='border-b'>{index+1}</td>
                <td className='border-l border-r border-b'>{integrante.displayName}</td>
                <td className='border-b'> {integrante.cargo} </td>
                <td className='border-l border-r border-b'>{integrante.rut}</td>
                <td className='border-b'>xxx</td>
              </tr>
            ))}
            </tbody>
          </table>

          <div className='flex'>
            <div className='w-9/12 border-l border-b font-bold' > &nbsp; OBSERVACIONES / ACUERDOS </div>
            <div className='w-3/12 border-l border-r border-b text-center'> FIRMA RELATOR </div>
          </div>
          <div className='flex'>          
            <div className='w-9/12 border-l border-b'> {seccionesRespuestas.observacion.respuestas.p.tipo.opciones.o1.valor} </div>         
            <div className='w-3/12 border-l border-r border-b text-center flex items-center justify-center'>xxx</div>
          </div>

          <div className='flex mt-3'>
            <div className=' bg-primaryColorProactive w-8/12'>&nbsp;</div>
            <div className='w-2/12 mr-1 ml-1'>
              <img src={imgProactive} alt="" />
            </div>
            <div className='w-2/12 bg-primaryColorProactive'></div>
          </div>

        </div>
      }
    </>
  )
}
