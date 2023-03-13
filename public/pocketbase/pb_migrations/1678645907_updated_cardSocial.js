migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0154zxkxp61qe2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vyvyvqgy",
    "name": "left",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0154zxkxp61qe2")

  // remove
  collection.schema.removeField("vyvyvqgy")

  return dao.saveCollection(collection)
})
