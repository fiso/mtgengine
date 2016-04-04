"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GallantryBase = require("../setODY/Gallantry.js");

class Gallantry extends GallantryBase {
  constructor(game) {
    super(game, "Gallantry", "Tempest Remastered", "TPR");
  }
}

module.exports = Gallantry;
