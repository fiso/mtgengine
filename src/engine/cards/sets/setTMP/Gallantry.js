"use strict";
const Constants = require ("../../../Constants");
const GallantryBase = require("../setTPR/Gallantry");

class Gallantry extends GallantryBase {
  constructor (game) {
    super(game, "Gallantry", "Tempest", "TMP");
  }
}

module.exports = Gallantry;
