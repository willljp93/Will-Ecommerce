migrate((db) => {
  const collection = new Collection({
    "id": "xjuw0zlkeywxgti",
    "created": "2023-03-12 01:30:26.074Z",
    "updated": "2023-03-12 01:30:26.074Z",
    "name": "catFlanes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8a9ctpog",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 25,
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
  const collection = dao.findCollectionByNameOrId("xjuw0zlkeywxgti");

  return dao.deleteCollection(collection);
})
