"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CounterboreBase = require("../setDPA/Counterbore.js");

class Counterbore extends CounterboreBase {
  constructor(game) {
    super(game, "Counterbore", "Shadowmoor", "SHM");
  }
}

module.exports = Counterbore;
