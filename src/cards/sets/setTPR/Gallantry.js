"use strict";
const Constants = require ("../../../Constants");
const GallantryBase = require("../setODY/Gallantry");

class Gallantry extends GallantryBase {
  constructor (game) {
    super(game, "Gallantry", "Tempest Remastered", "TPR");
  }
}

module.exports = Gallantry;
