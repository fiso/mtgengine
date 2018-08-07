"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Forget extends UnimplementedCard {
  constructor (game) {
    super(game, "Forget", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Forget;
