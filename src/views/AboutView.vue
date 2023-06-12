<!-- [mixins]
<script>
import flash from '@/mixins/flash';

export default {
  mixins: [flash]
}
</script> -->

<script setup>
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();
</script>

<template>
  <div>
    <p>
      <button @click="flash('Attention', 'It Works On The About Page', 'warning')">Click Me</button>
    </p>
  </div>
</template>

