migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  collection.name = "featureds"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h0rpzwbh2mmyaod")

  collection.name = "destacados"

  return dao.saveCollection(collection)
})
