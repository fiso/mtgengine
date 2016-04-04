"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CatalogBase = require("../set8ED/Catalog.js");

class Catalog extends CatalogBase {
  constructor(game) {
    super(game, "Catalog", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Catalog;
