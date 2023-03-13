migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnsuz4gx",
    "name": "discount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wnsuz4gx",
    "name": "discount",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
})
