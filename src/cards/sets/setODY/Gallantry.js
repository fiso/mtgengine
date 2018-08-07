"use strict";
const Constants = require ("../../../Constants");
const GallantryBase = require("../setTPR/Gallantry");

class Gallantry extends GallantryBase {
  constructor (game) {
    super(game, "Gallantry", "Odyssey", "ODY");
  }
}

module.exports = Gallantry;
