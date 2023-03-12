migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjuw0zlkeywxgti")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y2y2lsni",
    "name": "discount",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 99
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjuw0zlkeywxgti")

  // remove
  collection.schema.removeField("y2y2lsni")

  return dao.saveCollection(collection)
})
