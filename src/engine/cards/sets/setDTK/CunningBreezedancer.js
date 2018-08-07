"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningBreezedancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Breezedancer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CunningBreezedancer;
