"use strict";
const Constants = require ("../../../Constants");
const PropagandaBase = require("../setC13/Propaganda");

class Propaganda extends PropagandaBase {
  constructor (game) {
    super(game, "Propaganda", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Propaganda;
