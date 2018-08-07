"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EcstaticPiper extends UnimplementedCard {
  constructor (game) {
    super(game, "Ecstatic Piper", "Defeat a God", "TDAG");
  }
}

module.exports = EcstaticPiper;
