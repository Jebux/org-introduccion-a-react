import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.  ap ((equipo,index) => { return <option></option>}  )

    const equipos = ['Programación',
                    'Front End',
                    'Data Science',
                    'Devops',
                    'UX y Diseño',
                    'Móvil',
                    'Innovación y Gestión'
]

    const manejarCambio =(e) =>{
        console.log('cambio',e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value='' disabled defaultValue='' hidden>Seleccionar Equipo</option>
            {equipos.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones