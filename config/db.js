const { PROTOCOL, HOST, DBPORT, DBNAME } = process.env;
module.exports = {
    dev: {
        protocol: PROTOCOL || "mongodb",
        host: HOST || "localhost",
        port: DBPORT || 27017,
        database: DBNAME || "myDB"
    },
    test: {
        protocol: PROTOCOL || "mongodb",
        host: HOST || "test",
        port: DBPORT || 27017,
        database: DBNAME || "myDB"
    },
    prod: {
        protocol: PROTOCOL || "mongodb",
        host: HOST || "prod",
        port: DBPORT || 27017,
        database: DBNAME || "myDB"
    }
}