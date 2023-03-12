migrate((db) => {
  const collection = new Collection({
    "id": "tk7yiujaak3250k",
    "created": "2023-03-11 15:59:05.825Z",
    "updated": "2023-03-11 15:59:05.825Z",
    "name": "testimonials",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lzvl3pwl",
        "name": "name",
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
        "id": "cuererco",
        "name": "text",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 256,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0yspskg4",
        "name": "avatar",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 4,
          "max": 50,
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
  const collection = dao.findCollectionByNameOrId("tk7yiujaak3250k");

  return dao.deleteCollection(collection);
})
