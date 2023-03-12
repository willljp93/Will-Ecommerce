migrate((db) => {
  const collection = new Collection({
    "id": "4p7nl4lxtrbsiap",
    "created": "2023-03-11 16:27:06.511Z",
    "updated": "2023-03-11 16:27:06.511Z",
    "name": "promotions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mahlhvf9",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 4,
          "max": 25,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "a2dmyvdd",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 256,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kgzir8zm",
        "name": "image",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 25,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vie9dyiv",
        "name": "discount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100
        }
      },
      {
        "system": false,
        "id": "r1ztzwaa",
        "name": "expires",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4p7nl4lxtrbsiap");

  return dao.deleteCollection(collection);
})
