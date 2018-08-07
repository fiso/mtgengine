"use strict";
const Constants = require ("../../../Constants");
const BreathofMalfegorBase = require("../setPIDW/BreathofMalfegor");

class BreathofMalfegor extends BreathofMalfegorBase {
  constructor (game) {
    super(game, "Breath of Malfegor", "Alara Reborn", "ARB");
  }
}

module.exports = BreathofMalfegor;
