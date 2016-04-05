"use strict";
const Constants = require ("../../../Constants");
const TurntoSlagBase = require("../setM13/TurntoSlag");

class TurntoSlag extends TurntoSlagBase {
  constructor(game) {
    super(game, "Turn to Slag", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TurntoSlag;
