export default function (url: string): string {
    if (/^(http|https|ftp):\/\//.test(url)) {
        return url;
    }
    if (/^img/.test(url)){
        return require('@/assets/'+url);
    }
    return url;
}
