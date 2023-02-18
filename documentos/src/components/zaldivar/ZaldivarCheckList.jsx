import React, { useEffect, useState } from "react";
import img2 from "./checkList.png"
import img1 from "./zaldivarAftaMinerals.png"
import dataZaldivar from "./checklistZaldivar.json"

export const ZaldivarCheckList = () => {
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
        seccionesRespuestas: Object.values(data.seccionesRespuestas),
      };
    } else {
      return {
        seccionesRespuestas: [],
      };
    }
  };
  const resultado = respuestas();   
  console.log(resultado.seccionesRespuestas)

  return (
    <>
      {loading ? <span></span>        
        :    
        <div className='container p-2'>          
          <div className="text-center">
              <img className="mx-auto" src={img1} alt="img" />
              <img className="mx-auto" src={img2} alt="img" />
          </div>

          <table className="w-full mt-3 " style={{ fontSize: "9pt" }}>
              <thead>
                <tr className="">
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white">
                      NOMBRE CONDUCTOR 
                  </th>
                  <th className="border w-3/12"> </th>
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white">
                      PATENTE O N° INTERNO
                  </th>
                  <th className="border w-3/12">  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white">GERENCIA / AREA / EE.CC</th>
                  <th className="border w-3/12">  </th>
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white"> FECHA INICIO DE TURNO </th>
                  <th className="border w-3/12"></th>
                </tr>
              </tbody>
          </table>

          <table className="w-full mt-3 text-left" style={{ fontSize: "9pt" }}>
              <thead>
                <tr className="">
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white">
                      RUT DEL CONDUCTOR 
                  </th>
                  <th className="border w-9/12"> </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white">FECHA DE CONTROL</th>
                  <th className="border w-9/12">  </th>
                </tr>
                <tr className="">
                  <th className="border border-black w-3/12 bg-primaryColorZaldivar text-white">KILOMETRAJE</th>
                  <th className="border w-9/12"> {encabezado.kilometraje} </th>
                </tr>
              </tbody>
          </table>
          {resultado.seccionesRespuestas.map((unidad, index) =>
            unidad.id !== "observaciones" ? (
            <table className="w-full font-bold " style={{ fontSize: "10pt" }} key={index}>
                <thead >
                    <tr className="text-white bg-primaryColorZaldivar border-black border-l border-r">
                        <th className="text-left bg-secondaryColorZaldivar">REVISAR EL CORRECTO FUNCIONAMIENTO DE {unidad.instruccion} </th>
                        <th className="w-1/12">Si</th>
                        <th className="w-1/12">No</th>
                    </tr>
                </thead>
                <tbody className="break-inside-avoid">
                { Object.values(unidad.respuestas).map((secc, index) => (
                    <tr className="border " style={{ fontSize: "9pt" }} key={index}>
                        <td className="border font-normal bg-primaryColorZaldivar text-white border-black">
                          {secc.contenido}
                        </td> 
                        {secc.tipo && secc.tipo.opciones ? (
                            secc.tipo.opciones.o1 ? (
                              <React.Fragment>
                                <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" defaultChecked/></td>
                                <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none"/> </td>                       
                              </React.Fragment>
                          ) : secc.tipo.opciones.o2 ? (
                              <React.Fragment>
                                <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" /></td>
                                <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" defaultChecked/> </td>                       
                              </React.Fragment>
                          ) : (
                              <React.Fragment>
                                <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" /></td>
                                <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none"/> </td>                       
                              </React.Fragment>
                          )
                        ) : (
                          <React.Fragment>
                            <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none" /></td>
                            <td className="text-center bg-tertiaryColorZaldivar"><input type="radio" className="pointer-events-none"/> </td>                       
                          </React.Fragment>
                        )}
                    </tr>   
                  ))}                                 
                </tbody>
                
            </table>
            ) : null
          )}
          
        </div>
      }
    </>
  )
}
