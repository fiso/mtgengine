"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unsummon extends UnimplementedCard {
  constructor (game) {
    super(game, "Unsummon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Unsummon;
