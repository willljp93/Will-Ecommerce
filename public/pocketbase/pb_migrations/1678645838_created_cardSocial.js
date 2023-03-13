migrate((db) => {
  const collection = new Collection({
    "id": "l0154zxkxp61qe2",
    "created": "2023-03-12 18:30:37.920Z",
    "updated": "2023-03-12 18:30:37.920Z",
    "name": "cardSocial",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1memsgi6",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dcxyum6n",
        "name": "icon",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5tl2r705",
        "name": "value",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "8hqipxum",
        "name": "color1",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 4,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lr24epwr",
        "name": "color2",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 4,
          "max": 20,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("l0154zxkxp61qe2");

  return dao.deleteCollection(collection);
})
