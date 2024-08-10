import { getAuth, signInWithCustomToken } from "firebase/auth";
import moment from "moment-timezone";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getDocumentoById } from "../../firebase/documentos";
import imgKinRoss from "./kinRossImg.png";
import dataKin from './datosKinRoss.json'

// const fetcher = (url) => fetch(url).then((res) => res.json());
// const url =
//   "https://us-central1-vaku-89121.cloudfunctions.net/account/userfront";

export const KinRossLayout = () => {
  const { empresa, id } = useParams();
  const [dataAux, setData] = useState({});
  const [loading, setLoading] = useState(true);
  moment.locale("es");

  // const { data, error, isLoading } = useSWR(url, fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });

  // useEffect(() => {
  //   console.log(data);
  //   if (data) {
  //     setLoading(true);
  //     console.log(data.token);
  //     const auth = getAuth();
  //     let signInOk = signInWithCustomToken(auth, data.token)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         getDocumentoById(empresa, id)
  //           .then((resul) => {
  //             setData(resul);
  //             console.log(resul.encabezado);
  //             setLoading(false);
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //             setLoading(false);
  //           });
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         // ...
  //       });
  //   }
  // }, [data]);

  useEffect(() => {
    setData(dataKin)
    setTimeout(() => {
        setLoading(false);
    }, 1000);   
}, [])

  useEffect(() => {}, []);
  const { encabezado, fechaCreacion, validadoPor } = dataAux;

  const respuestas = () => {
    if (!loading) {
      return {
        seccionDeRespuestas: Object.values(dataAux.seccionesRespuestas),
        // respuestasAutoEvaluacion: Object.values(data.seccionesRespuestas.autoEvaluacion.respuestas),
        respuestasObservaciones: Object.values(
          dataAux.seccionesRespuestas.observaciones.respuestas
        ),
      };
    } else {
      return {
        // respuestasAutoEvaluacion: [],
        respuestasObservaciones: [],
        seccionDeRespuestas: [],
      };
    }
  };

  const ordenarSegunIndex = (arreglo) => {
    return arreglo.sort((a, b) => {
      return a.index - b.index;
    });
  };

  const resultado = respuestas();
  const resultadoOrdenado = ordenarSegunIndex(resultado.seccionDeRespuestas);
  // console.log(resultadoOrdenado);

  return (
    <>
      {loading ? (
        <span></span>
      ) : (
        <div id="contenedor" className="container p-2">
          <div className="grid-container grid-cols-4 border ">
            <div className="h-24 border">
              <div className="grid grid-rows-1 h-full justify-center items-center">
                <img src={imgKinRoss} alt="img" />
              </div>
            </div>
            <div className="h-24 border">
              <div className="grid h-full text-center w-full items-center">
                <div className="font-bold" style={{ fontSize: "15pt" }}>
                  La Coipa
                </div>
              </div>
            </div>
            <div className="h-24 border">
              <div className="grid grid-rows-1 h-full text-center w-full items-center">
                <h2 style={{ fontSize: "8pt" }} className="mt-4">
                  SISTEMA DE GESTION S&SO-MDO
                </h2>
                <h1 className="font-bold mb-1" style={{ fontSize: "15pt" }}>
                  {" "}
                  Check List Camionetas
                </h1>
                <h2 style={{ fontSize: "11pt" }} className="mb-2">
                  (DIARIO)
                </h2>
              </div>
            </div>
            <div className="h-24 border ">
              <div
                className="grid grid-rows-4 h-full "
                style={{ fontSize: "9pt" }}
              >
                <div className="flex ">
                  <div className="bg-primaryColorKinRoss text-white w-32 border-b border-black border-r ">
                    Codigo
                  </div>
                  <div className="mx-auto">F-PE-020-CH01</div>
                </div>
                <div className="flex ">
                  <div className="bg-primaryColorKinRoss text-white w-32 border-b border-black border-r">
                    Elaborado/Aprobado
                  </div>
                  <div className="mx-auto text-xs">P.Aguilera/S.Pereira </div>
                </div>
                <div className="flex">
                  <div className="bg-primaryColorKinRoss text-white w-32 border-b border-black border-r">
                    Fecha de Emision
                  </div>
                  <div className="mx-auto">22/05/2019</div>
                </div>
                <div className="flex">
                  <div className="bg-primaryColorKinRoss text-white w-32 border-black border-r">
                    Pagina
                  </div>
                  <div className="mx-auto">1 de 1</div>
                </div>
              </div>
            </div>
          </div>

          <table className="w-full mt-3" style={{ fontSize: "9pt" }}>
            <thead>
              <tr className="">
                <th className="border border-black w-2/12 bg-primaryColorKinRoss text-white">
                  GERENCIA
                </th>
                <th className="border w-2/12"> </th>
                <th className="border border-black w-2/12 bg-primaryColorKinRoss text-white">
                  EMPRESA
                </th>
                <th className="border w-2/12"> {encabezado.lugarFaena} </th>
                <th className="border border-black w-2/12 bg-primaryColorKinRoss text-white">
                  KILOMETRAJE
                </th>
                <th className="border w-2/12"> {encabezado.kilometraje} </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <th className="border border-black w-2/12 bg-primaryColorKinRoss text-white">
                  AREA
                </th>
                <th className="border w-2/12"> {encabezado.areaTrabajo} </th>
                <th className="border border-black w-2/12 bg-primaryColorKinRoss text-white">
                  FECHA
                </th>
                <th className="border w-2/12">
                  {" "}
                  {moment(fechaCreacion)
                    .tz("America/Santiago")
                    .format("DD-MM-YYYY h:mm a")}{" "}
                </th>
                <th className="border border-black w-2/12 bg-primaryColorKinRoss text-white">
                  PATENTE
                </th>
                <th className="border w-2/12">
                  {" "}
                  {encabezado.vehiculo.patente}{" "}
                </th>
              </tr>
            </tbody>
          </table>

          <table className="w-full mt-3 font-bold">
            <thead>
              <tr className="">
                <th className="w-1/2 "></th>
                <th className="w-1/2 border border-black text-white bg-primaryColorKinRoss">
                  Conductor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">Nombre</td>
                <td className="border text-center font-normal">
                  {" "}
                  {validadoPor.displayName}{" "}
                </td>
              </tr>
              <tr>
                <td className="border">Kilometraje inicial</td>
                <td className="border text-center font-normal">
                  {" "}
                  {encabezado.kilometraje}{" "}
                </td>
              </tr>
              <tr>
                <td className="border">Hora inicio</td>
                <td className="border text-center font-normal">
                  {" "}
                  {moment(fechaCreacion)
                    .tz("America/Santiago")
                    .format("h:mm a")}{" "}
                </td>
              </tr>
              <tr>
                <td className="border">Hora Termino</td>
                <td className="border text-center font-normal"></td>
              </tr>
              <tr>
                <td className="border">Firma del conductor</td>
                <td className="border text-center font-normal">****</td>
              </tr>
            </tbody>
          </table>

          {resultadoOrdenado.map((unidad, index) =>
            unidad.nombre !== "Observaciones" ? (
              <div key={index}>
                <div
                  className="flex justify-center bg-secondaryColorKinRoss"
                  style={{ fontSize: "7pt" }}
                >
                  <h1
                    className="text-center font-bold p-1 text-white"
                    htmlFor="actividad"
                  >
                    {" "}
                    {unidad.index}. {unidad.nombre}
                  </h1>
                </div>
                <table
                  className="w-full font-bold"
                  style={{ fontSize: "11pt" }}
                >
                  <thead>
                    <tr className="border border-black text-white bg-primaryColorKinRoss">
                      <th>N°</th>
                      <th>Item a Revisar</th>
                      <th className="w-1/12">Si</th>
                      <th className="w-1/12">No</th>
                      <th className="w-1/12">N/A</th>
                      <th>Comentarios</th>
                    </tr>
                  </thead>
                  <tbody className="break-inside-avoid">
                    {Object.values(unidad.respuestas).map((pregunta, index) => (
                      <tr className="border" key={index}>
                        <td className="border text-center">{index + 1}</td>
                        <td className="border font-normal">
                          {pregunta.contenido}
                        </td>
                        {pregunta.tipo && pregunta.tipo.opciones ? (
                          pregunta.tipo.opciones.o1 ? (
                            <React.Fragment>
                              <td className="border text-center">X</td>
                              <td className="border"></td>
                              <td className="border"></td>
                              <td className="border">
                                {" "}
                                {pregunta.observacion}{" "}
                              </td>
                            </React.Fragment>
                          ) : pregunta.tipo.opciones.o2 ? (
                            <React.Fragment>
                              <td className="border"></td>
                              <td className="border text-center">X</td>
                              <td className="border"></td>
                              <td className="border">
                                {" "}
                                {pregunta.observacion}{" "}
                              </td>
                            </React.Fragment>
                          ) : pregunta.tipo.opciones.o3 ? (
                            <React.Fragment>
                              <td className="border"></td>
                              <td className="border"></td>
                              <td className="border text-center">X</td>
                              <td className="border">
                                {" "}
                                {pregunta.observacion}{" "}
                              </td>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <td className="border"></td>
                              <td className="border"></td>
                              <td className="border"></td>
                              <td className="border"></td>
                            </React.Fragment>
                          )
                        ) : (
                          <React.Fragment>
                            <td className="border"> </td>
                            <td className="border"></td>
                            <td className="border"></td>
                            <td className="border"></td>
                          </React.Fragment>
                        )}
                        {/* <td></td>            */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null
          )}

          <div className="border mt-3">
            <div className="bg-secondaryColorKinRoss border-b text-white">
              Observaciones
            </div>
            {respuestas().respuestasObservaciones.map((preg, index) => (
              <div className="p-1 flex" key={index}>
                {preg.imagenes &&
                  Object.values(preg.imagenes).map((imagen, i) => (
                    <div key={i} className=" p-1 float-left w-4/12">
                      <div className="bg-primaryColorKinRoss border">
                        <h1 className="text-center">{preg.contenido} </h1>
                      </div>
                      <img className="" src={imagen.url} />
                      <div className=" border">
                        <h1 className="text-center">{preg.observacion} </h1>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div
            className="p-1 mt-2 text-white bg-primaryColorKinRoss border"
            style={{ fontSize: "11pt" }}
          >
            Cualquier desperfecto y/o elemento o accesorio en mal estado, debe
            ser reportado inmediatamente a la Supervisión. <br />
            La Supervisión debe tomar accion inmediata y si se trata de un buen
            critico que se encuentra en mal estado, el vehiculo debe quedar
            fuera de servicios hasta su reparación
          </div>
        </div>
      )}
    </>
  );
};
