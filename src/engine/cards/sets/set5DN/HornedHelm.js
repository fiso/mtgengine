"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornedHelm extends UnimplementedCard {
  constructor (game) {
    super(game, "Horned Helm", "Fifth Dawn", "5DN");
  }
}

module.exports = HornedHelm;
