"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedFountain extends UnimplementedCard {
  constructor (game) {
    super(game, "Hallowed Fountain", "Zendikar Expeditions", "EXP");
  }
}

module.exports = HallowedFountain;
