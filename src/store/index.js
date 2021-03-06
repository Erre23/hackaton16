import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid';
import router from './../router';
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    user: {
      nombre: '',
      apellido: '',
      edad: null,
      email: '',
      celular: '',
      id: ''
    }
  },
  mutations: {
    deleteUserMutation(state, payload) {
      state.users = state.users.filter(u => u.id !== payload);
    },
    getUserMutation(state, payload) {
      state.user = payload;
    },
    getUsersMutation(state, payload) {
      state.users = payload;
    },
    updateUserMutation(state) {
      state.user = {
        nombre: '',
        apellido: '',
        edad: null,
        email: '',
        celular: '',
        id: ''
      }
    }
  },
  actions: {
    createUserAction({commit}, user) {
      user.id = uuidv4();
      fetch(`http://localhost:4000/users`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        }).then(res => {
          Swal.fire({
            icon: 'success',
            title: 'El usuario fue agregado',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            router.push('/listado');
          })
      })
    },
    deleteUserAction({commit}, id) {
      fetch(`http://localhost:4000/users/${id}`, {method: 'DELETE'}).then(res => {
         commit('deleteUserMutation', id);
         Swal.fire({
          icon: 'success',
          title: 'El usuario fue eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      })
    },
    getUserAction({commit}, id) {
      fetch(`http://localhost:4000/users/${id}`, {method: 'GET'}).then(res => {
        return res.json();
      }).then(data => {
        commit('getUserMutation', data);
      })
    },
    getUsersAction({commit}) {
      fetch('http://localhost:4000/users', {method: 'GET'}).then(res => {
        return res.json();
      }).then(data => {
        commit('getUsersMutation', data);
      })
    },
    updateUserAction({commit}, user) {
      
      fetch(`http://localhost:4000/users/${user.id}`, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => {
        Swal.fire({
          icon: 'success',
          title: 'Los datos del usuario fueron actualizados',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          commit('updateUserMutation');
          router.push('/listado');
        })
      })
    },
    updateUserActionCancel({commit}) {
      commit('updateUserMutation');
      router.push('/listado');
    },
  },
  modules: {
  }
})
