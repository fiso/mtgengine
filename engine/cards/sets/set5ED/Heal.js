"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heal extends UnimplementedCard {
  constructor(game) {
    super(game, "Heal", "Fifth Edition", "5ED");
  }
}

module.exports = Heal;
