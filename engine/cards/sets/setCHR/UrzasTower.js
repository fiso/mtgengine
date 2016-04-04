"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrzasTowerBase = require("../setATQ/UrzasTower.js");

class UrzasTower extends UrzasTowerBase {
  constructor(game) {
    super(game, "Urza's Tower", "Chronicles", "CHR");
  }
}

module.exports = UrzasTower;
