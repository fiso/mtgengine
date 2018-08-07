"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallforUnity extends UnimplementedCard {
  constructor (game) {
    super(game, "Call for Unity", "Aether Revolt", "AER");
  }
}

module.exports = CallforUnity;
