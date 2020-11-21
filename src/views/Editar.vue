<template>
    <div class="container">
        <form @submit.prevent="actualizar({id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            edad: user.edad,
            email: user.email,
            celular: user.celular})">
            <div class="card">
                <div class="card-header bg-info text-white">
                    INGRESE LOS DATOS DEL USUARIO
                </div>
                <div class="card-body text-left">
                    <div class="form-group">
                        <label class="mb-0 pl-1">Nombre</label>
                        <input class="form-control" placeholder="Ingrese su Nombre" v-model="user.nombre">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Apellido</label>
                        <input class="form-control" placeholder="Ingrese su Apellido" v-model="user.apellido">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Edad</label>
                        <input class="form-control" type="number" placeholder="Ingrese su Edad" v-model="user.edad">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Email</label>
                        <input class="form-control" type="email" placeholder="Ingrese su Email" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label class="mb-0 pl-1">Celular</label>
                        <input class="form-control" placeholder="Ingrese su Celular" v-model="user.celular">
                    </div>
                    <div class="form-group text-center mb-0">
                        <button class="btn btn-primary" type="submit">Guardar Cambios</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
    Name:'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    methods: {
        ...mapActions(['getUserAction', 'updateUserAction']),
        actualizar(user){
            Swal.fire({
            title: '¿Estas seguro de actualizar los datos del usuario?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, actualizar',
            cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.updateUserAction(user)
                }
            })
        }
    },
    computed: {
        ...mapState(['user'])
    },
    created() {
        this.getUserAction(this.id);
    }
}
</script>

<style>

</style>