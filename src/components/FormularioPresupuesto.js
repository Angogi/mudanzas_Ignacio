import React from 'react';
import './FormularioPresupuesto.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { db } from "../firebase";


const FormularioPresupuesto = () => {
  const formik = useFormik({
    initialValues: {
      ciudadOrigen: '',
      provinciaOrigen:'',
      codigoPostalOrigen:'',
      plantaDePisoOrigen:'',
      interiorExteriorOrigen:'Interior',
      ascensorOrigen:'Sí',
      desmontaje:'Sí',
      numeroDeMuebles:'',
      materialEmbalaje:'No',
      numeroDeCajas:'',
      ayudaEmbalaje:'No',
      descripcionMuebles:'',
      ciudadDestino:'',
      provinciaDestino:'',
      codigoPostalDestino:'',
      plantaDePisoDestino:'',
      interiorExteriorDestino:'Interior',
      ascensorDestino:'Sí',
      montaje:'Sí',
      nombre:'',
      medioDeContacto:'',
      email:'',
      numeroDeContacto:'',
    },
    validationSchema: Yup.object({
      // nombre: Yup.string()
      //   .max(15, 'Debe ser de 15 carácteres o menos.')
      //   .required('Required'),
    
      email: Yup.string().email('Dirección de email invalida.'),
    }),
    onSubmit: values => {
        db.collection('solicitudesPresupuesto').add({
          ciudadOrigen: values.ciudadOrigen,
          provinciaOrigen:values.provinciaOrigen,
          codigoPostalOrigen:values.codigoPostalOrigen,
          plantaDePisoOrigen: values.plantaDePisoOrigen,
          interiorExteriorOrigen:values.interiorExteriorOrigen,
          ascensorOrigen:values.ascensorOrigen,
          desmontaje:values.desmontaje,
          numeroDeMuebles:values.numeroDeMuebles,
          materialEmbalaje: values.materialEmbalaje,
          numeroDeCajas: values.numeroDeCajas,
          ayudaEmbalaje: values.ayudaEmbalaje,
          descripcionMuebles: values.descripcionMuebles,
          ciudadDestino:values.ciudadDestino,
          provinciaDestino: values.provinciaDestino,
          codigoPostalDestino: values.codigoPostalDestino,
          plantaDePisoDestino: values.plantaDePisoDestino,
          interiorExteriorDestino: values.interiorExteriorDestino,
          ascensorDestino: values.ascensorDestino,
          montaje: values.montaje,
          nombre: values.nombre,
          email: values.email,
          numeroDeContacto: values.numeroDeContacto
        })
        .then(()=>{
          alert('Muchas gracias. La solicitud ha sido envada con éxito, nos pondremos en contacto en la mayor brevedad posible. También puede enviarnos algunas imagenes por whatsapp o correo electrónico, si así lo desea, saludos.  🤗');
        })
        .catch((error)=>{
            alert(error.message)
        })
        .then(()=>{
         formik.handleReset();
        })

    },

  
  });
  return (
    <form  onSubmit={formik.handleSubmit}>
      <h1>Solicitud de presupuesto</h1>
      <div className="inputs__containerType2 divImagen1 "/>
        <div className="inputs__boxContainer">
          <div className="inputs__container">
            <h3>Por favor, ingrese los datos de origen 😃🛫</h3>
              <div className="inputBox">
                <label htmlFor="ciudadOrigen">Ciudad Origen</label>
                <input
                  id="ciudadOrigen"
                  name="ciudadOrigen"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ciudadOrigen}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="provinciaOrigen">Provincia</label>
                <input
                  id="provinciaOrigen"
                  name="provinciaOrigen"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.provinciaOrigen}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="codigoPostalOrigen">Código postal</label>
                <input
                  id="codigoPostalOrigen"
                  name="codigoPostalOrigen"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.codigoPostalOrigen}
                />
              </div>
          </div>

          <div className="inputs__container">
            <div className="inputBox">

              <label htmlFor="plantaDePisoOrigen">Planta del Piso</label>
              <input
                id="plantaDePisoOrigen"
                name="plantaDePisoOrigen"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.plantaDePisoOrigen}
              />
            </div>

            <div className="inputBox">
              <label htmlFor="interiorExteriorOrigen">Piso:</label>
              <select
                id="interiorExteriorOrigen"
                name="interiorExteriorOrigen"
                type="select"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interiorExteriorOrigen}
              >

                <option value="Interior">Interior</option>
                <option value="Exterior">Extererior</option>

              </select>
            </div>

            <div className="inputBox">
            
              <label htmlFor="ascensorOrigen">Ascensor</label>
              <select 
                  id="ascensorOrigen"
                  name="ascensorOrigen"
                  value={formik.values.ascensorOrigen} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
              
              </select>
            </div>

          </div>

          <div className="inputs__containerType2">
            <div className="inputBox">
              <label htmlFor="desmontaje"> ¿Requiere servicio de desmontaje de muebles? 🛠️🧰🔨🔧</label>
              <select 
                  id="desmontaje"
                  name="desmontaje"
                  value={formik.values.desmontaje} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
              
              </select>
            </div>
          </div>
          <div className="inputs__containerType2 order2">
           <div className="inputBox">
              <label htmlFor="materialDeEmbalaje"> ¿Requiere material de embalaje? Cajas, plastico de burbujas, etc.📦📦📦</label>
              <select 
                  id="materialDeEmbalaje"
                  name="materialDeEmbalaje"
                  value={formik.values.materialDeEmbalaje} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  >
                  <option value="No">No</option>
                  <option value="Sí">Sí</option>
              
              </select>
            </div>
          </div>
          {formik.values.materialDeEmbalaje == "Sí" ?
          <div className="inputs__containerType2 order3" >
            <div className="inputBox">
              <label htmlFor="numeroDeCajas">Número de cajas aproximadas 🤔📦</label>
              <input
                id="numeroDeCajas"
                name="numeroDeCajas"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numeroDeCajas}
              />
            </div>
          </div>

          : null

          }
          <div className="inputs__containerType2">
            <div className="inputBox">

              <label htmlFor="numeroDeMuebles">¿Cuantos muebles son en total? 🪑🎸📺🛋️</label>
              <input
                id="numeroDeMuebles"
                name="numeroDeMuebles"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numeroDeMuebles}
              />
            </div>
          </div>
        
          <div className="inputs__containerType2 order4">
            <div className="inputBox">

              <label htmlFor="ayudaEmbaje">¿Requiere ayuda con el embalaje de la mudanza? 📦🙋‍♂️💁🏽‍♀️</label>
              <select 
                  id="ayudaEmbalaje"
                  name="ayudaEmbalaje"
                  value={formik.values.ayudaEmbalaje} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
              
              </select>
            </div>
          </div>
          
          <div className="inputs__containerType2 order6">
            <div className="inputBox">
          
              <label htmlFor="descripcionMuebles">Por favor, agrega alguna descripción de tus muebles u observación 🪑🛋️🚪👀</label>
              <textarea
                id="descripcionMuebles"
                name="descripcionMuebles"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.descripcionMuebles}
              />
            </div>
          </div>

        </div>

        <div className="inputs__boxContainer">
      
          <div className="inputs__container">
            <h3> Ahora vamos con los datos de destino 😎🛬</h3>

            <div className="inputBox">
              <label htmlFor="ciudadDestino">Ciudad</label>
              <input
                id="ciudadDestino"
                name="ciudadDestino"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.ciudadDestino}
              />
            </div>
            <div className="inputBox">
            
              <label htmlFor="provinciaDestino">Provincia</label>
              <input
                id="provinciaDestino"
                name="provinciaDestino"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.provinciaDestino}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="codigoPostalDestino">Código postal</label>
              <input
                id="codigoPostalDestino"
                name="codigoPostalDestino"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.codigoPostalDestino}
              />
            </div>

          </div>

          <div className="inputs__container">
            <h3>Infomación valiosa 🏙️📦🧳🏬</h3>

            <div className="inputBox">
          
              <label htmlFor="plantaDePisoDestino">Planta del Piso</label>
              <input
                id="plantaDePisoDestino"
                name="plantaDePisoDestino"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.plantaDePisoDestino}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="interiorExteriorDestino">Piso:</label>
              <select
                id="interiorExteriorDestino"
                name="interiorExteriorDestino"
                type="select"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interiorExteriorDestino}
              >

                <option value="Interior">Interior</option>
                <option value="Exterior">Extererior</option>

              </select>
            </div>

            <div className="inputBox">
              <label htmlFor="ascensorDestino">Ascensor</label>
              <select 
                  id="ascensorDestino"
                  name="ascensorDestino"
                  value={formik.values.ascensorDestino} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  >
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
              
              </select>
            </div>
          </div>
          <div className="inputs__containerType2">
           <div className="inputBox">

            <label htmlFor="montaje">¿Requiere servicio de montaje de muebles? 🛠️🧰🔨🔧</label>
            <select 
                id="montaje"
                name="montaje"
                value={formik.values.montaje} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                >
                <option value="Sí">Sí</option>
                <option value="No">No</option>
            
            </select>

           </div>
          </div>

          <div className="inputs__containerType2" />

          <div className="inputs__containerType2">

          <div className="inputBox">

            <label htmlFor="nombre">Por favor, escribe tu nombre 📃✍️</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nombre}
            />
          </div>
          </div>

          <div className="inputs__containerType2">
            <div className="inputBox">

              <label> ¿Por que medio prefiere ser contactado? 📲☎📭</label>
              <select 
                id="medioDeContacto"
                name="medioDeContacto"
                value={formik.values.medioDeContacto} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                
              >
                  <option value="0">Elegir...</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="Llamada telefónica">Llamada telefónica</option>
                  <option value="Email">Email</option>
              
              </select>
            </div>
          </div>
          { formik.values.medioDeContacto == "Email" ?
          <div className="inputs__containerType2">
            <div className="inputBox">

              <label htmlFor="email">Por favor, escribe tu email 🤗📭</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}

            </div>
          </div>
          :
          <div className="inputs__containerType2">
            <div className="inputBox">

              <label htmlFor="numeroDeContacto">Por favor, escribe tu número:📱📞</label>
              <input
                id="numeroDeContacto"
                name="numeroDeContacto"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numeroDeContacto}
              />
            </div>
            
          </div>
          }
        </div>


      <button type="submit">Enviar solicitud</button>


      <div className="inputs__containerType2 footImage"/>


      
    </form>
  );
};



export default FormularioPresupuesto;