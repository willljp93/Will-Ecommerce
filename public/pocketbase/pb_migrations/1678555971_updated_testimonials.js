migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tk7yiujaak3250k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfekgrt7",
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
  const collection = dao.findCollectionByNameOrId("tk7yiujaak3250k")

  // remove
  collection.schema.removeField("qfekgrt7")

  return dao.saveCollection(collection)
})
