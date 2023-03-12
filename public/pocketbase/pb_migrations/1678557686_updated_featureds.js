migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  // remove
  collection.schema.removeField("wnsuz4gx")

  return dao.saveCollection(collection)
})
