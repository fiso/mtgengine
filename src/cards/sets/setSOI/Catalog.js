"use strict";
const Constants = require ("../../../Constants");
const CatalogBase = require("../set8ED/Catalog");

class Catalog extends CatalogBase {
  constructor (game) {
    super(game, "Catalog", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Catalog;
