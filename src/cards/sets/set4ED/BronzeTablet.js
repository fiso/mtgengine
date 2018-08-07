"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BronzeTablet extends UnimplementedCard {
  constructor (game) {
    super(game, "Bronze Tablet", "Fourth Edition", "4ED");
  }
}

module.exports = BronzeTablet;
