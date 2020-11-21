<template>
    <div class="container">
        <form @submit.prevent="createUserAction({nombre: nombre,
            apellido: apellido,
            edad: edad,
            email: email,
            celular: celular})">
            <div class="card">
                <div class="card-header bg-info text-white">
                    INGRESE LOS DATOS DEL USUARIO
                </div>
                <div class="card-body text-left">
                    <div class="form-group">
                        <label class="mb-0 pl-1">Nombre</label>
                        <input class="form-control" placeholder="Ingrese su Nombre" v-model="nombre">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Apellido</label>
                        <input class="form-control" placeholder="Ingrese su Apellido" v-model="apellido">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Edad</label>
                        <input class="form-control" type="number" placeholder="Ingrese su Edad" v-model="edad">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Email</label>
                        <input class="form-control" type="email" placeholder="Ingrese su Email" v-model="email">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Celular</label>
                        <input class="form-control" placeholder="Ingrese su Celular" v-model="celular">
                    </div>
                    <div class="form-group text-center mb-0">
                        <button class="btn btn-primary" type="submit">Agregar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    Name:'Agregar',
    data() {
        return {
            nombre: '',
            apellido: '',
            edad: 0,
            email: '',
            celular: ''
        }
    },
    methods: {
        ...mapActions(['createUserAction'])
    }
}
</script>

<style>

</style>