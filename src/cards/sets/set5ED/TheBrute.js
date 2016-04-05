"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "The Brute", "Fifth Edition", "5ED");
  }
}

module.exports = TheBrute;
