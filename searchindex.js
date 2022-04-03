// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Perfil-pacientes.html", "Página sin título", "Perfil pacientes  Con este componente  pueden revisar con datalle los datos ingresados del paciente  Descripción general  Perfil de pacientes  Resultados por fecha  Resultados de patalogías  Advertencias  Ajustes  Salir  Cuenta  Conectar con el administrador   Admin@hospitalmail.com  Paciente  Germán Maya  Observaciones  is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged   Electro cardiograma  Complexión  Presión  180  Presión alta  Paciente de alto riesgo   ", "");
   return this;
}
