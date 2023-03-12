migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xjuw0zlkeywxgti")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qoi6v1ra",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 256,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pxvcmdyk",
    "name": "image",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 25,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p8axdcl5",
    "name": "price",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oj9dq7cd",
    "name": "available",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5ai3dldp",
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
  const collection = dao.findCollectionByNameOrId("xjuw0zlkeywxgti")

  // remove
  collection.schema.removeField("qoi6v1ra")

  // remove
  collection.schema.removeField("pxvcmdyk")

  // remove
  collection.schema.removeField("p8axdcl5")

  // remove
  collection.schema.removeField("oj9dq7cd")

  // remove
  collection.schema.removeField("5ai3dldp")

  return dao.saveCollection(collection)
})
