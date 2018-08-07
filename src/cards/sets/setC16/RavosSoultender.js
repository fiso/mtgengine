"use strict";
const Constants = require ("../../../Constants");
const RavosSoultenderBase = require("../setPZ2/RavosSoultender");

class RavosSoultender extends RavosSoultenderBase {
  constructor (game) {
    super(game, "Ravos, Soultender", "Commander 2016", "C16");
  }
}

module.exports = RavosSoultender;
