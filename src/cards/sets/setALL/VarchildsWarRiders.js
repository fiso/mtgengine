"use strict";
const Constants = require ("../../../Constants");
const VarchildsWarRidersBase = require("../setMED/VarchildsWarRiders");

class VarchildsWarRiders extends VarchildsWarRidersBase {
  constructor (game) {
    super(game, "Varchild's War-Riders", "Alliances", "ALL");
  }
}

module.exports = VarchildsWarRiders;
