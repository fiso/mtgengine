"use strict";
const Constants = require ("../../../Constants");
const TurnAsideBase = require("../setEMN/TurnAside");

class TurnAside extends TurnAsideBase {
  constructor (game) {
    super(game, "Turn Aside", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TurnAside;
