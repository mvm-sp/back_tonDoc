define({ "api": [
  {
    "type": "get",
    "url": "/logapi/",
    "title": "Read all data of a logapi",
    "version": "1.0.0",
    "name": "getAll",
    "group": "logapi",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This route reads logapi data</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/logapi/",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int4",
            "optional": false,
            "field": "id",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsurl",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsrequest",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsresponse",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsemailuser",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "dtlog",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"\", \n  \"dsurl\": \"\", \n  \"dsrequest\": \"\", \n  \"dsresponse\": \"\", \n  \"dsemailuser\": \"\", \n  \"dtlog\": \"\", \n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/docs/logapi.js",
    "groupTitle": "logapi",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/logapi/",
    "title": "Search data of a logapi by passed parameters",
    "version": "1.0.0",
    "name": "search",
    "group": "logapi",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This route reads logapi data</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/logapisearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int4",
            "optional": false,
            "field": "id",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsurl",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsrequest",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsresponse",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "dsemailuser",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "dtlog",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"\", \n  \"dsurl\": \"\", \n  \"dsrequest\": \"\", \n  \"dsresponse\": \"\", \n  \"dsemailuser\": \"\", \n  \"dtlog\": \"\", \n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/docs/logapi.js",
    "groupTitle": "logapi",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user_account",
    "title": "Create a new user_account record",
    "version": "1.0.0",
    "name": "add",
    "group": "user_account",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This Route is used to add new record to the user_account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "pass",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/user_account/",
        "type": "json"
      }
    ],
    "filename": "dist/docs/user_account.js",
    "groupTitle": "user_account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user_account/",
    "title": "Read all data of a user_account",
    "version": "1.0.0",
    "name": "getAll",
    "group": "user_account",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This route reads user_account data</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/user_account/",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int4",
            "optional": false,
            "field": "id",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "pass",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "createdat",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "updatedat",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"\", \n  \"name\": \"\", \n  \"email\": \"\", \n  \"pass\": \"\", \n  \"active\": \"\", \n  \"createdat\": \"\", \n  \"updatedat\": \"\", \n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/docs/user_account.js",
    "groupTitle": "user_account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user_account/:id",
    "title": "Read data of a user_account by id",
    "version": "1.0.0",
    "name": "getAll",
    "group": "user_account",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This route reads user_account data</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The user_account-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/user_account/4711",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int4",
            "optional": false,
            "field": "id",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "pass",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "createdat",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "updatedat",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"\", \n  \"name\": \"\", \n  \"email\": \"\", \n  \"pass\": \"\", \n  \"active\": \"\", \n  \"createdat\": \"\", \n  \"updatedat\": \"\", \n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/docs/user_account.js",
    "groupTitle": "user_account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user_account/:id",
    "title": "Delete data of a user_account by ID",
    "version": "1.0.0",
    "name": "remove",
    "group": "user_account",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This route remove a record from user_account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user_account-ID.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/user_account/",
        "type": "json"
      }
    ],
    "filename": "dist/docs/user_account.js",
    "groupTitle": "user_account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user_account/",
    "title": "Search data of a user_account by passed parameters",
    "version": "1.0.0",
    "name": "search",
    "group": "user_account",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This route reads user_account data</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/user_accountsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int4",
            "optional": false,
            "field": "id",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "varchar",
            "optional": false,
            "field": "pass",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "createdat",
            "description": "<p>Description</p>"
          },
          {
            "group": "Success 200",
            "type": "timestamptz",
            "optional": false,
            "field": "updatedat",
            "description": "<p>Description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"\", \n  \"name\": \"\", \n  \"email\": \"\", \n  \"pass\": \"\", \n  \"active\": \"\", \n  \"createdat\": \"\", \n  \"updatedat\": \"\", \n}",
          "type": "json"
        }
      ]
    },
    "filename": "dist/docs/user_account.js",
    "groupTitle": "user_account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user_account/:id",
    "title": "Update the user_account data by Id",
    "version": "1.0.0",
    "name": "update",
    "group": "user_account",
    "permission": [
      {
        "name": "Token Validation"
      }
    ],
    "description": "<p>This Route is used to update data to the user_account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "email",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "varchar",
            "optional": false,
            "field": "pass",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "active",
            "description": "<p>Description</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl https://{HostAddres}/api/v1/user_account/",
        "type": "json"
      }
    ],
    "filename": "dist/docs/user_account.js",
    "groupTitle": "user_account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Generic",
            "description": "<p>Erro Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Error\n{\n  \"success\": false,\n  \"error\": \"error messagem\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
