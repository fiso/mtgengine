"use strict";
const Constants = require ("../../../Constants");
const VarchildsWarRidersBase = require("../setALL/VarchildsWarRiders");

class VarchildsWarRiders extends VarchildsWarRidersBase {
  constructor (game) {
    super(game, "Varchild's War-Riders", "Masters Edition", "MED");
  }
}

module.exports = VarchildsWarRiders;
