import swal from 'sweetalert2'

export default {
  methods: {
    flash(message) {
      return swal.fire('Success!', message, 'success');
    }
  },
}