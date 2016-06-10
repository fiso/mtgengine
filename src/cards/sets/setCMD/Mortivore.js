"use strict";
const Constants = require ("../../../Constants");
const MortivoreBase = require("../setDPA/Mortivore");

class Mortivore extends MortivoreBase {
  constructor (game) {
    super(game, "Mortivore", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Mortivore;
