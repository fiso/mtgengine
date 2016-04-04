"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MortivoreBase = require("../setDPA/Mortivore.js");

class Mortivore extends MortivoreBase {
  constructor(game) {
    super(game, "Mortivore", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Mortivore;
