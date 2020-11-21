<template>
    <div class="container border">
        <h1>LISTA DE USUARIOS </h1>
        
        <router-link to="/agregar">
            <button class="btn btn-primary mb-2">Agregar usuario</button>
        </router-link>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead class="bg-info text-white">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Email</th>                    
                        <th scope="col">Celular</th>                    
                        <th scope="col"></th>                    
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                     <tr v-for='user in users' :key="user.id">
                        <td>{{user.nombre}}</td>
                        <td>{{user.apellido}}</td>
                        <td>{{user.edad}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.celular}}</td>
                        <td>
                            <router-link :to="{
                                name: 'Editar',
                                params: { id: user.id }
                            }">
                                <button class="btn btn-warning">Editar</button>
                            </router-link>
                        </td>
                        <td><button class="btn btn-danger" @click.prevent="deleteUserAction(user.id)">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: 'Listado',
    methods: {
        ...mapActions(['getUsersAction', 'deleteUserAction'])
    },
    computed: {
        ...mapState(['users'])
    },
    created() {
        this.getUsersAction();
    }
}
</script>

<style>

</style>