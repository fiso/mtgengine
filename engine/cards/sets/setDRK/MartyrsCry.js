"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MartyrsCryBase = require("../setME4/MartyrsCry.js");

class MartyrsCry extends MartyrsCryBase {
  constructor(game) {
    super(game, "Martyr's Cry", "The Dark", "DRK");
  }
}

module.exports = MartyrsCry;
