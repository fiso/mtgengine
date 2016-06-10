"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningBandit extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Bandit", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CunningBandit;
