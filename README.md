# mango-kaf
#### Write your Pub-Sub struct imports into the typescript file `_sample.ts`
```shell
up.sh
```

This script will launch the `docker-compose.yml` file and make several configurations, such as:
- Launch Confluent's Apache Kafka platform in a Docker network with a PostgreSQL DB
- Initialize the database with `up.sql`
- Provision the necessary topics on the Kafka Broker
- Configure a Source Connector to each Pub-Sub stream
- Configure Sink Connectors to the PostgreSQL DB
- Launch & monitor the stack
