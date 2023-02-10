import vehiculosLivianoImg from './imgPortada.png'
import vehiculosLivianoImg1 from './imgPortada1.png'
import dataSierraGorda from './datosSierraGorda.json'
import React, { useEffect, useState } from "react";

export const Header = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(dataSierraGorda)
        setTimeout(() => {
            setLoading(false);
        }, 1000);   
    }, [])

    const { encabezado, fechaCreacion, validadoPor } = data

    const respuestas = () => {
        if (!loading) {
          return {
            seccionDeRespuestas: Object.values(data.seccionesRespuestas),
            cuadrilla: Object.values(data.cuadrilla.integrantes),
            seccionesRespuestasValidacion: Object.values(data.seccionesRespuestasValidacion.validacionInicial.respuestas),
          };
        } else {
          return {
            seccionDeRespuestas: [],
            cuadrilla:[],
            seccionesRespuestasValidacion: [],
          };
        }
    };
    const resultado = respuestas();    

    
    let fechaValida = fechaCreacion;
    let date = new Date(fechaValida);
    let fecha = date.toLocaleDateString();
    let hora = date.toLocaleTimeString();
    
    // console.log(resultado.seccionDeRespuestas)

  return (

    <>
        {loading ? <span></span>        
        :    

        <div className='container p-2 '>

            <div className="items-center justify-center flex mb-3 w-full" style={{position: "relative"}}>
                <div >
                    <img src={vehiculosLivianoImg} alt="img" className="mr-4" />
                </div>
                <div className="w-4/5 justify-center flex-col font-bold" >
                    <h2 style={{ fontSize: "8pt" }} className="text-secondaryColoSierraGorda">INSTRUCTIVO DE SEGURIDAD - RIESGO MATERIAL DE FATALIDAD</h2>
                    <header >
                        <h1 className='font-bold tracking-wide' style={{ fontSize: "19pt" }}>PÉRDIDA DE CONTROL DE <br/> VEHÍCULOS LIVIANOS - CAMIONETAS</h1>
                    </header>
                </div>
                <div style={{
                    position: "absolute",
                    top: 20,
                    right: 10,
                    zIndex: 1,
                }}>                     
                    <img src={vehiculosLivianoImg1} alt="img"/>
                </div>
            </div>
            
            {/* <h2 style={{ fontSize: "8px" }} className="text-center text-gray-500">INSTRUCTIVO DE SEGURIDAD - RIESGO MATERIAL DE FATALIDAD</h2>
            <header className='text-center text-lg grid mb-5 font-bold'>
                <h1 style={{ fontSize: "19px" }}>PÉRDIDA DE CONTROL DE VEHÍCULOS LIVIANOS - CAMIONETAS</h1>
            </header> */}
            
            <div >
                <div className='flex mb-1 justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }} >
                    <div className='font-bold p-1 text-white bg-primaryColorSierrGorda'   > ACTIVIDAD O TAREA</div>
                    <div className="flex-1 p-1" > {encabezado.descripcionDelTrabajo}</div>
                </div>

                <div className='flex mb-1 justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }} >
                    <div className='font-bold p-1 bg-primaryColorSierrGorda text-white' htmlFor="empresa">EMPRESA</div>
                    <div className="flex-1 p-1" > {encabezado.empresaADesarrollar}  </div>
                </div>

                <div className='flex mb-1 justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }}>
                    <div className='font-bold p-1 bg-primaryColorSierrGorda text-white' htmlFor='gerencia'>GERENCIA</div>
                    <div className="flex-1 p-1">  </div>
                </div>

                <div className='flex mb-1 justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }} >
                    <div className='font-bold p-1 bg-primaryColorSierrGorda text-white' htmlFor="lugar">LUGAR</div>
                    <div className="flex-1 p-1"> {encabezado.lugarFaena} </div>
                </div>
                
                <div className='flex mb-1 float-left mr-2 justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }} >
                    <div className='w-24 font-bold p-1 bg-primaryColorSierrGorda text-white' htmlFor="fecha">FECHA</div>
                    <div className="w-64 flex-1  p-1"> {fecha} </div>
                </div>
                <div className='flex mb-1 justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }} >
                    <div className='w-24 p-1 font-bold bg-primaryColorSierrGorda text-white' htmlFor="hora">HORA</div>
                    <div className="flex-1 p-1" > {hora} </div>
                </div>
            </div>

            
            <h2 className='text-center text-1xl mb-2 mt-3' style={{ fontSize: "9pt" }}> <span className='font-bold'>IDENTIFICACIÓN</span> DE LOS MIEMBROS DE LA CUADRILLA</h2>
            
            
            <table className='w-full border-separate border border-none border-spacing-2'>
                <thead>
                    <tr className='bg-primaryColorSierrGorda border' style={{ fontSize: "9pt" }}>
                        <th className='w-64 border-2 border-primaryColorSierrGorda text-white'>NOMBRE Y APELLIDO</th>
                        <th className='w-32 border-2 border-primaryColorSierrGorda text-white'>RUT</th>
                        <th className='w-32 border-2 border-primaryColorSierrGorda text-white'>FIRMA</th>
                    </tr>
                </thead>
                <tbody>
                { Object.values(resultado.cuadrilla).map((integrante, index) => (                     
                    <tr style={{ fontSize: "9pt" }} key={index} >
                        <td className='border-2 border-secondaryColoSierraGorda text-center'>{integrante.displayName} </td>
                        <td className='border-2 border-secondaryColoSierraGorda text-center'> {integrante.rut} </td>
                        <td className='border-2 border-secondaryColoSierraGorda text-center'> **** </td>
                    </tr>                   
                ))}
                </tbody>
            </table>
            
            <table className='mt-2 w-full text-left border-separate border-spacing-2'>
                <thead >
                    <tr style={{ fontSize: "8pt" }}>
                        <th className='w-64  font-normal'><span className='font-bold'>VERIFICACIÓN</span> DE CONTROLES ANTES Y DURANTE LA TAREA POR EL SUPERVISOR</th>
                        <th className='w-24 text-center bg-primaryColorSierrGorda text-white'>REVISADO</th>
                        <th className='w-24 text-center bg-primaryColorSierrGorda text-white'>NO APLICA</th>
                    </tr>
                </thead>
                <tbody>
                { Object.values(resultado.seccionesRespuestasValidacion).map((respValidacion, index) => (                       
                    <tr style={{ fontSize: "9pt" }} key={index} >
                        <td className='font-normal'> {respValidacion.contenido} </td>
                        {respValidacion.tipo && respValidacion.tipo.opciones ? (
                          respValidacion.tipo.opciones.o1 ? (
                                <React.Fragment>
                                    <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox" defaultChecked/></td>
                                    <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                </React.Fragment>
                            ) : respValidacion.tipo.opciones.o2 ? (
                                <React.Fragment>
                                    <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                    <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox" defaultChecked/> </td>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                    <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                </React.Fragment>
                            )
                        ) : (
                            <React.Fragment>
                                <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                            </React.Fragment>
                        )}
                    </tr>
                ))}
                </tbody>          
            </table>

            <div>
                <div className='mb-1 flex justify-center border-2 border-secondaryColoSierraGorda' style={{ fontSize: "9pt" }} >
                    <div className='text-center w-32 font-bold p-1 text-white bg-secondaryColoSierraGorda' >OBSERVACIÓN</div>
                    <div   className="flex-1 p-1" > </div>
                </div>

                <div className='flex justify-center border-2 border-primaryColorSierrGorda' style={{ fontSize: "9pt" }} >
                    <div className='text-center w-32 font-bold p-1 bg-primaryColorSierrGorda text-white'>NOMBRE</div>
                    <div  className="flex-1 p-1 text-black" >  {validadoPor.displayName} </div>
                </div>
            </div>

            <h2 className='text-center text-1xl mb-2 mt-5' style={{ fontSize: "9pt" }}> <span className='font-bold'>VERIFICACIÓN</span> DE CONTROLES POR CONDUCTORES</h2>
            

            {resultado.seccionDeRespuestas.map((unidad, index) =>
                unidad.id !== "seccion1" ? (
                <div className="flex mb-10 w-full " key={index}>        
                    <div className=''>    
                        <div style={{ fontSize: "9pt" }} className=' h-5 w-32 text-center bg-primaryColorSierrGorda text-white' >
                            Control Critico {unidad.index}
                        </div>
                        <div className="img-container">
                            <img src={unidad.noAplica.secundario[0].content} alt="img" style={{ height: "100px", width: "100px" }} />                    
                        </div>
                    </div>
                    <table className='text-left w-full '>
                        <thead className=''>
                            <tr className='bg-primaryColorSierrGorda text-white' >                        
                                {/* <th style={{ fontSize: "9pt" }} className='w-32 text-center border border-color-white'>CONTROL CRITICO</th> */}
                                <th style={{ fontSize: "8pt" }} className='text-center border-l-2'>Dispositivos de seguridad</th>
                                <th style={{ fontSize: "9pt" }} className='text-center border-l-2'>SI</th>
                                <th style={{ fontSize: "9pt" }} className='text-center border-l-2'>NO</th>
                                {/* {unidad.tipoPregunta === "Sí-No-N/A" ? (
                                    <th style={{ fontSize: "9pt" }} className='text-center border-l-2'>N/A</th>
                                ) : null} */}
                                <th style={{ fontSize: "9pt" }} className='w-32 text-center border-l-2'>COMENTARIOS</th>                        
                            </tr>
                        </thead>
                        <tbody >
                        { Object.values(unidad.respuestas).map((cCritico, index) => ( 
                            <tr style={{ fontSize: "9pt" }} key={index}>
                                {/* <th><img src={vehiculosLivianoImg} alt="img"/></th> */}
                                <td className='font-normal' style={{ fontSize: "10pt" }}> {cCritico.contenido} </td>
                                {cCritico.tipo && cCritico.tipo.opciones ? (
                                    cCritico.tipo.opciones.o1 ? (
                                        <React.Fragment>
                                            <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox" defaultChecked/></td>
                                            <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                            <td className='font-normal'></td>
                                        </React.Fragment>
                                    ) : cCritico.tipo.opciones.o2 ? (
                                        <React.Fragment>
                                            <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                            <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox" defaultChecked/> </td>
                                            <td className='font-normal'></td>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                            <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                            <td className='font-normal'></td>
                                        </React.Fragment>
                                    )
                                ) : (
                                    <React.Fragment>
                                        <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                        <td className='text-center'> <input className='form-checkbox w-8 h-5 pointer-events-none' type="checkbox"/> </td>
                                        
                                    </React.Fragment>
                                )}
                            </tr>
                        ))}
                        </tbody>                
                    </table> 
                </div>
                ) : null
            )}

            <div className="flex items-center justify-center mt-10">

                <div className=''>
                    <span className="p-2 bg-red rounded-3xl material-symbols-outlined text-white">back_hand</span>
                </div>
                <div className="ml-2 w-1/2 text-center font-light bg-red rounded text-white" style={{ fontSize: "7pt" }}>
                    EN CASO DE QUE LA RESPUESTA SEA NO, INFORMA A TU SUPERVISOR,
                    CORRIGE EL CONTROL CRÍTICO Y CONTINÚA EL TRABAJO EN FORMA SEGURA
                </div>
            </div>

        </div>
        }
    </>
  )
}
