"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofAnguish extends UnimplementedCard {
  constructor (game) {
    super(game, "Herald of Anguish", "Aether Revolt", "AER");
  }
}

module.exports = HeraldofAnguish;
