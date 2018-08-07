"use strict";
const Constants = require ("../../../Constants");
const CatalogBase = require("../setSOI/Catalog");

class Catalog extends CatalogBase {
  constructor (game) {
    super(game, "Catalog", "Eighth Edition", "8ED");
  }
}

module.exports = Catalog;
