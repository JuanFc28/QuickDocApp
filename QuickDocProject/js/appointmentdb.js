// <!-- Conexion a base de datos -->
// <!-- Script principal con Supabase v2 (modular) -->

// import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// // Configura tus credenciales de Supabase
// const supabaseUrl = 'https://uintoirzyackkzcdqvcy.supabase.co '; // tu URL
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpbnRvaXJ6eWFja2t6Y2RxdmN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzIxMDAsImV4cCI6MjA2MTYwODEwMH0.xnWzU6fG3CLTVOzIj0KRSe8mszcUWpUW9Ai1e_nXEsQ'; // tu clave pública (anon)
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Espera a que el DOM esté listo
// document.getElementById('form-cita').addEventListener('submit', async function(event) {
//   event.preventDefault();

//   const nombre = document.getElementById('nombre').value;
//   const fecha = document.getElementById('fecha').value;
//   const hora = document.getElementById('hora').value;

//   // Inserta los datos en la tabla 'citas'
//   const { data, error } = await supabase
//     .from('citas')
//     .insert([{ nombre, fecha, hora }]);

//   if (error) {
//     alert('Error al guardar la cita: ' + error.message);
//   } else {
//     alert('¡Cita agendada exitosamente!');
//   }});
