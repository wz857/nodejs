
FROM node:13.8.0
#声明作者
MAINTAINER wz
#移动当前目录下面的文件到app目录下
ADD . /app/
#进入到app目录下面，类似cd
WORKDIR /app
#安装依赖
RUN npm install
#对外暴露的端口
EXPOSE 3000
#程序启动脚本
CMD ["npm", "start"]
