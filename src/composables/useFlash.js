import swal from 'sweetalert2'

export function useFlash() {
    function flash(title, message, level = 'success') {
        return swal.fire(title, message, level);
    }

    return { flash };
}