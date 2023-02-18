import React, { useEffect, useState } from 'react'
import dataZaldivar from "./datosZaldivar.json"
import img1 from "./imagen1.png"
import img2 from "./imagen2.png"
import img3 from "./imagen3.png"

export const ZaldivarCheckListCC = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setData(dataZaldivar)
        setTimeout(() => {
            setLoading(false);
        }, 1000);   
    }, [])
    const { encabezado, fechaCreacion, validadoPor } = data

    const respuestas = () => {
        if (!loading) {
        return {
            seccionDeRespuestas: Object.values(data.seccionesRespuestas),
        };
        } else {
        return {
            seccionDeRespuestas: [],
        };
        }
    };
    const resultado = respuestas();   
    
    console.log(resultado.seccionDeRespuestas)

  return (
    <>
        {loading ? <span></span>        
            :  
            <div className='container p-2'>            
                <div className="mt-2 mb-4" >
                    <h1 className="text-white text-center bg-primaryColorZaldivarPre border-tertiaryColorZaldivar ">PERDIDA DE CONTROL DE VEHICULO</h1>
                </div>

                <div className="border font-bold "  style={{ fontSize: "12pt" }}>FECHA DE CONTROL</div>
                {resultado.seccionDeRespuestas.map((unidad, index) =>
                    unidad.id !== "seccion1" ? (
                    <table key={index} className="w-full font-bold border-l" style={{ fontSize: "11pt" }}>
                        <thead className="">
                        <tr className="bg-primaryColorZaldivarPre" style={{ fontSize: "11pt" }}>
                            <th className="text-left bg-primaryColorZaldivarPre">CC{unidad.index}: {unidad.noAplica.primario[0].content} </th>
                            <th className="w-1/12 border-r border-l">Si</th>
                            <th className="w-1/12 border-r">No</th>
                        </tr>
                        </thead>
                        <tbody className="border">
                        { Object.values(unidad.respuestas).map((cCritico, index) => ( 
                            <tr className="border " style={{ fontSize: "9pt" }} key={index}>
                                <td className="border font-normal border-black">
                                {cCritico.contenido}
                                </td> 
                                {cCritico.tipo && cCritico.tipo.opciones ? (
                                    cCritico.tipo.opciones.o1 ? (
                                    <React.Fragment>
                                        <td className="border-r text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" defaultChecked/></td>
                                        <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none"/> </td>                       
                                    </React.Fragment>
                                ) : cCritico.tipo.opciones.o2 ? (
                                    <React.Fragment>
                                        <td className="border-r text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" /></td>
                                        <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" defaultChecked/> </td>                       
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <td className="border-r text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" /></td>
                                        <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none"/> </td>                       
                                    </React.Fragment>
                                )
                                ) : (
                                <React.Fragment>
                                    <td className="border-r text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" /></td>
                                    <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none"/> </td>                       
                                </React.Fragment>
                                )}
                            </tr>  
                        ))}
                        </tbody>
                    </table>
                    ) : null
                )}

                <div className='flex mt-10'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div className="flex-1" style={{ alignItems: "center", position: "relative" }}>
                        <img className='w-32 h-32 mb-2' src={img2} alt="" style={{ position: "relative", zIndex: "1" }}/>
                        <div className='bg-primaryColorZaldivarPre font-bold text-center items-center mt-4 w-full ' style={{ position: "absolute", left: 87, top: 0, zIndex: "0" }}>
                            <span>IMPORTANTE  </span><br />
                            <span>Si alguna de las preguntas tiene como respuesta ¨NO¨</span> <br />  
                            <span>No debe INICIAR TAREA y CONTACTAR A SU SUPERVISOR.</span> <br /> 
                            <span>Este documento es su autorización para detener la tarea.</span> <br />                   
                        </div>
                    </div>
                </div>

            </div>
        }
    </>
  )
}
