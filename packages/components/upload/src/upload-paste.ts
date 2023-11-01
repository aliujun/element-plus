import { buildProps, isArray } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type UploadPaste from './upload-paste.vue'

export const uploadPasteProps = buildProps({
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)
export type UploadPasteProps = ExtractPropTypes<typeof uploadPasteProps>

export const uploadPasteEmits = {
  file: (file: File[]) => isArray(file),
}
export type UploadPasteEmits = typeof uploadPasteEmits

export type UploadPasteInstance = InstanceType<typeof UploadPaste>
