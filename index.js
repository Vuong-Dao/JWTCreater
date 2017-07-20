var async = require('async');
var jwt = require('jsonwebtoken');
var superAgent = require('superagent');

const GOOGLE_PRIVATE_KEY = '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6CXkdH94ogKrN\nxOVCCxIKds8GluS4ACzygWy6326AkDCutjm8cJkMsX35jO9ThwZpu/x4CVyMBD3A\nERoFfW/VVXSYkLqtS3RtBvS3DxrtxE1XH4IPLe9zglu0nRbqG+7hC83Pjjd/X5TH\nV6mcve59u0qB40z/D4COjk58Pnuqz/1VjXCu9Ma6u7V6twm2XmXdpQAvbPLpUWzg\nCj1Agk5jJDRkdADsQeRNiZ220A+vTln/5n09nkA15h55c5bOI0adxrC6N8Z41LKh\nLNhwJBk6PT3wf2zo+w6uAYmV6eRcPeECUGWOO9tvJCByuhLyjz068h7olkgAMryq\nSpx3okUXAgMBAAECggEABxMMJX+MPFW5k7iXOpM0MkIBWQ/3jkhcwoi0a0jK1B28\n6YU+yHvZqMITzHUVDBlC36tz4YFYS8TE2l8Wx7r/kTO+NX0EyZ6TGgBH4bGJMHMk\nuRmWzF/5TpcC82kpMWmILyD6ncLGjn6X0vAc9ZEYFso+qOt4BpepfQJMBBfWLmZz\nbWoc6XALhcYY+2+fbPVSxq11tjaqi3LDaqUsDiQe9w5yfRzXMvdhTy3nUl32zVtE\nJ/n6CamMUhtwtsnvikNNfh5JMzpcAFHE7XfhhWEJXNYgPFpILaQdxk6x+FYdWrab\nmW9HTgVgYDygcMJUWq7MyTpcNrA9C8E9BqY9EUJsyQKBgQDmqGOp837hoQbwbd+A\n821cruRqIYk/CHos2FzUkOqpDxZjrL+QoP7E9Wo2xlT/iOPXtV3TeSTccrzWIcg1\ns/z4ckK+I6IFNKq48wbjLNdKJwSyG4Vl89ll18KlGBzwk3XdPMvqMXtvyi5TVEsu\n1I8z7uF5QwK4MLmigBYkPk0KfwKBgQDOeg4PKcEF3sQDxokAHbAXcZmY8mgizl7f\nvNXcWlCr1TxX+qDoFmdWe46Uz6YacNBbO15kQwkq9VTJWs3gj0Bnmgy9jE6CywKO\nXOXX9eBGiVopwHtZz4Wq/BoOLRY1JnNOOTHi0uW8eY9VyPDbWa7Nu5JbRWqjI9Rx\nx/ECrRWJaQKBgE5VZ6uDH1cfKc0jc2FGyqBMYRROGV9H0L5EKJqkMJ2DmzX0qAZF\nNuDK++xoRNuXsNFELf4wyTz41nredDEQ1FvH6jTKwy6DaWtwVal3RBJR1/1o7U/n\nlbBJqzgITWPCoKenCxWZAnO/tSXlnbbkx1F60iYthNHq8lBmsZ5TbjSfAoGAGtYW\nWbYtllu70lnNmKxDJOjo884d5tg30JC0oy1B6vOOIkk6/K9cwwrQH1tV1X3wNsti\nm1lzKZg1au5Yb+Vuk4icO06vLaTBMku0u/sDKWfUxjR0U9n7H5wgrtMBXesfdX1N\nlJOgtHyAOsAhPgFMDQViImbFU2rmw9se4iAo+nECgYEA2VaJ1HlXhQrlYKPCbsG8\nmgFDP4jAvY0stppKDwPZ9eecgkYwt35YxkwbcEHiQN7X4ZxwxVSsb7EwyPnvusuu\nlfAUY8uQj84JcaAdZj5PC7qpcfyM01kDWjV4s/ld6+yUImEx6islO7lSH3F1GlDe\nH/efmIGWkF2QN0S13sP38io=\n-----END PRIVATE KEY-----\n';
const GOOGLE_CLIENT_EMAIL = 'inapp-billing@soccermeshdev-152607.iam.gserviceaccount.com';

const CLIENT_TOKEN = '';
const CLIENT_SUBSCRIPTION_ID = '';
const CLIENT_PACKAGE_NAME = '';

var generatedToken = jwt.sign({
    scope: "https://www.googleapis.com/auth/androidpublisher"
}, GOOGLE_PRIVATE_KEY, {
    algorithm: 'RS256',
    audience: 'https://www.googleapis.com/oauth2/v4/token',
    issuer: GOOGLE_CLIENT_EMAIL,
    expiresIn: '1h'
});

console.log(generatedToken);