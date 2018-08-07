"use strict";
const Constants = require ("../../../Constants");
const PropagandaBase = require("../setC16/Propaganda");

class Propaganda extends PropagandaBase {
  constructor (game) {
    super(game, "Propaganda", "Tempest", "TMP");
  }
}

module.exports = Propaganda;
