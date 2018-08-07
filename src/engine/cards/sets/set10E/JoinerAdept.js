"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoinerAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Joiner Adept", "Tenth Edition", "10E");
  }
}

module.exports = JoinerAdept;
