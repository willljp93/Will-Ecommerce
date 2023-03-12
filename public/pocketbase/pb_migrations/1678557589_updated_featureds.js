migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "saryrrsb",
    "name": "rating",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 5
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  // remove
  collection.schema.removeField("saryrrsb")

  return dao.saveCollection(collection)
})
