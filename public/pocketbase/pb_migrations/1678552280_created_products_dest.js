migrate((db) => {
  const collection = new Collection({
    "id": "h0rpzwbh2mmyaod",
    "created": "2023-03-11 16:31:20.584Z",
    "updated": "2023-03-11 16:31:20.584Z",
    "name": "products_dest",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1ow73aup",
        "name": "name",
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
        "id": "nxrx2g3c",
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
        "id": "d67ecp5z",
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
        "id": "lzi5ambr",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod");

  return dao.deleteCollection(collection);
})
