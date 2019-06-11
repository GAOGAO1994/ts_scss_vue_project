export interface DashDialogOptionsInterface {
  abstract?: string;
  title?: string;
  content?: Array<string>;
  closeText?: string;
}

export class DashDialogOptionsEntity {
  abstract: string = '点击打开通知';
  title: string = '通知title';
  content: Array<string> = ['段落1','段落2','段落3'];
  closeText: string = '知道了';
}
