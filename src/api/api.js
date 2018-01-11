import wepy from 'wepy';

const host = 'https://www.i-exshare.cn';
const wxRequest = async (params = {}, url) => {
    wepy.showToast({
      title: '加载中',
      icon: 'loading'
    });
    console.log(url);
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: params.data || {},
        header: {'Content-Type': 'application/json'},
    });
    wepy.hideToast();
    return res;
};

//index
const GetUerKey = (params) => wxRequest(params, host + '/api/get_user_key');

module.exports = {
    GetUerKey
};
