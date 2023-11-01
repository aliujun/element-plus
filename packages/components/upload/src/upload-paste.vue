<template>
  <div class="upload-paste" @click.stop.prevent @paste.prevent="onPaste">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import { throwError } from '@element-plus/utils/error'
import { uploadContextKey } from './constants'
import { uploadPasteEmits, uploadPasteProps } from './upload-paste'

const COMPONENT_NAME = 'ElUploadPaste'
defineOptions({
  name: COMPONENT_NAME,
})

defineProps(uploadPasteProps)
const emit = defineEmits(uploadPasteEmits)

const uploaderContext = inject(uploadContextKey)
if (!uploaderContext) {
  throwError(
    COMPONENT_NAME,
    'usage: <el-upload><el-upload-dragger /></el-upload>'
  )
}

const onPaste = (e: any) => {
  const data = e.clipboardData!.files[0]
  console.log('----粘贴结果是----', data)
  if (!data) return console.log('粘贴结果不存在')
  emit('file', [data])
}
</script>
