"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Lone Wolf", "Eighth Edition", "8ED");
  }
}

module.exports = LoneWolf;
