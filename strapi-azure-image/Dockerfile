FROM strapi/base
 
RUN yarn global add strapi
ENV DATABASE_CLIENT "mongo"

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app
WORKDIR /srv/app
VOLUME /srv/app

RUN  strapi new . \
    --dbclient=$DATABASE_CLIENT \
    --dbhost=$DATABASE_HOST \
    --dbport=$DATABASE_PORT \
    --dbname=$DATABASE_NAME \
    --dbusername=$DATABASE_USERNAME \
    --dbpassword=$DATABASE_PASSWORD \
    --dbssl=$DATABASE_SSL \  
    --no-run
    
RUN yarn add strapi-provider-upload-azure-storage 
COPY ./config/plugins.js ./config
RUN yarn build   
RUN yarn strapi install documentation

EXPOSE 1337  

CMD ["strapi", "develop"]
