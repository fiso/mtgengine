"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeraldofKozilek extends UnimplementedCard {
  constructor(game) {
    super(game, "Herald of Kozilek", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HeraldofKozilek;
