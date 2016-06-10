"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crusade extends UnimplementedCard {
  constructor (game) {
    super(game, "Crusade", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Crusade;
