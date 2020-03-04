var api;
if(process.env.NODE_ENV === 'development'){//运行 会自动进入这个判断
    console.log('开发环境');
	api="test.com"
}else{//发行 会自动进入这个判断
    console.log('生产环境');
	api="prod.com"
}

const API=api

export default{
	API
}