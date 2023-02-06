import vehiculosLivianoImg from './imgPortada.png'
import vehiculosLivianoImg1 from './imgPortada1.png'

export const Header = () => {
  return (

    <>
        <div className='container p-2 '>

            <div className="items-center justify-center flex mb-3 w-full" style={{position: "relative"}}>
                <div >
                    <img src={vehiculosLivianoImg} alt="img" className="mr-4" />
                </div>
                <div className="w-4/5 flex justify-center flex-col font-bold" >
                    <h2 style={{ fontSize: "8pt" }} className="text-gray-500">INSTRUCTIVO DE SEGURIDAD - RIESGO MATERIAL DE FATALIDAD</h2>
                    <header >
                        <h1 className='font-bold' style={{ fontSize: "19pt" }}>PÉRDIDA DE CONTROL DE <br/> VEHÍCULOS LIVIANOS - CAMIONETAS</h1>
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
                <div className='flex mb-1 justify-center border-2 border-orange-400' style={{ fontSize: "9pt" }} >
                    <label className='font-bold p-1 text-white bg-orange-400'  htmlFor="actividad"  >ACTIVIDAD O TAREA</label>
                    <input  id="actividad" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>

                <div className='flex mb-1 justify-center border-2 border-orange-400' style={{ fontSize: "9pt" }} >
                    <label className='font-bold p-1 bg-orange-400 text-white' htmlFor="empresa">EMPRESA</label>
                    <input id="empresa" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>

                <div className='flex mb-1 justify-center border-2 border-orange-400' style={{ fontSize: "9pt" }}>
                    <label className='font-bold p-1 bg-orange-400 text-white' htmlFor='gerencia'>GERENCIA</label>
                    <input id="gerencia" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>

                <div className='flex mb-1 justify-center border-2 border-orange-400' style={{ fontSize: "9pt" }} >
                    <label className='font-bold p-1 bg-orange-400 text-white' htmlFor="lugar">LUGAR</label>
                    <input id="lugar" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>
                
                <div className='flex mb-1 float-left mr-2 justify-center border-2 border-orange-400' style={{ fontSize: "9pt" }} >
                    <label className='w-24 font-bold p-1 bg-orange-400 text-white' htmlFor="fecha">FECHA</label>
                    <input id="fecha" type="text" className="w-64 flex-1  p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>
                <div className='flex mb-1 justify-center border-2 border-orange-400' style={{ fontSize: "9pt" }} >
                    <label className='w-24 p-1 font-bold bg-orange-400 text-white' htmlFor="hora">HORA</label>
                    <input id="hora" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>
            </div>

            
            <h2 className='text-center text-1xl mb-2 mt-3' style={{ fontSize: "9pt" }}> <span className='font-bold'>IDENTIFICACIÓN</span> DE LOS MIEMBROS DE LA CUADRILLA</h2>
            
            
            <table className='w-full border-separate border border-none border-spacing-2'>
                <thead>
                    <tr className='bg-orange-400 border' style={{ fontSize: "9pt" }}>
                        <th className='w-64 border-2 border-orange-400 text-white'>NOMBRE Y APELLIDO</th>
                        <th className='w-32 border-2 border-orange-400 text-white'>RUT</th>
                        <th className='w-32 border-2 border-orange-400 text-white'>FIRMA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ fontSize: "9pt" }}>
                        <td className='border-2 border-orange-400 text-center'>ww</td>
                        <td className='border-2 border-orange-400 text-center'>12345678-9</td>
                        <td className='border-2 border-orange-400 text-center'>JEP</td>
                    </tr>                   
                </tbody>
            </table>
            
            <table className='mt-2 w-full text-left border-separate border-spacing-2'>
                <thead >
                    <tr style={{ fontSize: "7pt" }}>
                        <th className='w-64 text-center'>VERIFICACIÓN DE CONTROLES ANTES Y DURANTE LA TAREA POR EL SUPERVISOR</th>
                        <th className='w-32 text-center bg-orange-400 text-white'>REVISADO</th>
                        <th className='w-32 text-center bg-orange-400 text-white'>NO APLICA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ fontSize: "9pt" }}>
                        <th className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam voluptate vero temporibus earum quis, aspernatur quasi incidunt consequatur beatae natus eveniet! Pariatur, nesciunt. Voluptatum nisi ipsam nam sapiente ullam.</th>
                        <th className='text-center'> <input className='form-checkbox w-8 h-5' type="checkbox" checked/> </th>
                        <th className='text-center'> <input className='form-checkbox w-8 h-5' type="checkbox"/> </th>
                    </tr>
                </tbody>          
            </table>

            <div>
                <div className='mb-1 flex justify-center border-2 border-gray-500' style={{ fontSize: "7pt" }} >
                    <label className='text-center w-32 font-bold p-1 text-white bg-gray-500'  htmlFor="actividad"  >OBSERVACIÓN</label>
                    <input  id="actividad" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>

                <div className='flex justify-center border-2 border-orange-400' style={{ fontSize: "7pt" }} >
                    <label className='text-center w-32 font-bold p-1 bg-orange-400 text-white' htmlFor="empresa">NOMBRE</label>
                    <input id="empresa" type="text" className="flex-1 p-1" placeholder="Ingresa tu texto aquí" value="Datos"/>
                </div>
            </div>

            <h2 className='text-center text-1xl mb-2 mt-3' style={{ fontSize: "9pt" }}> <span className='font-bold'>VERIFICACIÓN</span> DE CONTROLES POR CONDUCTORES</h2>
            


            <div className="flex mb-3 w-full">                
                <div>                    
                    <table className='text-left w-full border-separate border-none'>
                        <thead >
                            <tr >                        
                                <th style={{ fontSize: "9pt" }} className='w-32 text-center bg-orange-400 text-white border border-color-white'>CONTROL CRITICO</th>
                                <th style={{ fontSize: "8pt" }} className='text-center bg-orange-400 text-white border border-color-white'>Dispositivos de seguridad</th>
                                <th style={{ fontSize: "9pt" }} className='text-center bg-orange-400 text-white border border-color-white'>SI</th>
                                <th style={{ fontSize: "9pt" }} className='text-center bg-orange-400 text-white border border-color-white'>NO</th>
                                <th style={{ fontSize: "9pt" }} className='w-32 text-center bg-orange-400 text-white border border-color-white'>COMENTARIOS</th>                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ fontSize: "9pt" }}>
                                <th><img src={vehiculosLivianoImg} alt="img"/></th>
                                <th className='font-normal' style={{ fontSize: "10pt" }}>Lorem Lorem ipsum dolor sit, amet consquibusdam iuue Lorem Lorem ipsum dolor sit, amet consquibusdam iuLorem Lorem ipsum dolor sit, amet consquibusdam iufacilis, autem eus ab dignissimos?</th>
                                <th className='text-center'> <input className='form-checkbox w-8 h-5' type="checkbox"/> </th>
                                <th className='text-center'> <input className='form-checkbox w-8 h-5' type="checkbox"/> </th>
                                <th className='font-normal'></th>
                            </tr>
                        </tbody>                
                    </table> 
                </div>
            </div>









            <div>
                
            </div>
        
        </div>
    </>
  )
}
