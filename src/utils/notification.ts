import { ElNotification } from 'element-plus';
import { EpPropMergeType } from 'element-plus/es/utils';

// 提示消息
export function toast(
    message: string,
    type: EpPropMergeType<
        StringConstructor,
        'success' | 'warning' | 'info' | 'error',
        unknown
    > = 'success',
    duration: number = 3000
) {
    ElNotification({
        message,
        type,
        duration,
    });
}
