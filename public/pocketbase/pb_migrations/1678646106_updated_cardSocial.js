migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0154zxkxp61qe2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dcxyum6n",
    "name": "icon",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 25,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0154zxkxp61qe2")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
