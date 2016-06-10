"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Desertion extends UnimplementedCard {
  constructor (game) {
    super(game, "Desertion", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Desertion;
