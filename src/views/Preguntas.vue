<template>
    <div class="container">
        <h1>SOY LAS PREGUNTAS </h1>
        <div class="card m-1">
            <div class="card-header bg-info text-white">
                ¿Qué es Redux?
            </div>
            <div class="card-body text-justify">
                Redux es un patrón de arquitectura de datos que permite manejar el estado de la aplicación de una manera predecible. Está pensado para reducir el número de relaciones entre componentes de la aplicación y mantener un flujo de datos sencillo.
            </div>
        </div>
        <div class="card m-1">
            <div class="card-header bg-info text-white">
                ¿Qué es Vuex?
            </div>
            <div class="card-body text-justify">
                Básicamente es un almacén de datos centralizado para usar dentro de una aplicación.
            </div>
        </div>
        <div class="card m-1">
            <div class="card-header bg-info text-white">
                ¿Por qué usar un administrador de estado?
            </div>
            <div class="card-body text-justify">
                Podriamos listar los siguientes beneficios.
                <ul>
                    <li>Arquitectura escalable de datos</li>
                    <li>Mayor control sobre el flujo de datos y el estado de la aplicación</li>
                    <li>Estado global e inmutable</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Preguntas'
}
</script>

<style>

</style>