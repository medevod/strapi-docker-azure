FROM strapi/base

RUN yarn global add strapi
ENV DATABASE_CLIENT "mongo"


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
COPY ./config/server.js ./config
RUN yarn strapi install documentation
RUN yarn build   

EXPOSE 1447  

CMD ["strapi", "develop"]
