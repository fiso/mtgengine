"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VarchildsWarRidersBase = require("../setALL/VarchildsWarRiders.js");

class VarchildsWarRiders extends VarchildsWarRidersBase {
  constructor(game) {
    super(game, "Varchild's War-Riders", "Masters Edition", "MED");
  }
}

module.exports = VarchildsWarRiders;
