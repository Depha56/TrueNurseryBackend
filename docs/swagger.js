import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Auth API',
      version: '1.0.0',
      description: 'API for user authentication (login and signup)',
    },
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'apiKey',
          name: 'authorization',
          in: 'header',
          description: 'JWT token for authorization. Use the /auth/login endpoint to obtain it.',
        },
      },
      schemas: {
        UserSignup: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            email: { type: 'string', format: 'email' },
            password: { type: 'string' },
            role: { type: 'string', enum: ['admin', 'user'], default: 'user' },
          },
          required: ['name', 'email', 'password', 'role'],
        },
        UserLogin: {
          type: 'object',
          properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string' },
          },
          required: ['email', 'password'],
        },
        AuthResponse: {
          type: 'object',
          properties: {
            token: { type: 'string' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
