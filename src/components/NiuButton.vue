<template>
  <button
   class="el-button"
   :class="[
     'buttonSize'?`el-button-${buttonsize}`:''
   ]"
  >
    <slot />
  </button>
</template>
<script>
import { toRefs, injdet, computed} from 'vue'
export default {
  props: {
    size: {
      type: String,
      validator (val) {
        if (val === '') return true
        return ['medium', 'small', 'mini'].indexOf(val) !== -1
      }
    }
  },
  setup (props) {
    const size = toRefs(props)
    const buttonsize = useButtonsize(size)
    return { buttonsize }
  },
  
}
const useButtonsize = (size) => {
  return computed(() => {
    const elFormItem = injdet('elFormItem', {})
    return size?.value || elFormItem.elFormItemSize
  })
}
</script>

