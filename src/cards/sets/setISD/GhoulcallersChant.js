"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhoulcallersChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghoulcaller's Chant", "Innistrad", "ISD");
  }
}

module.exports = GhoulcallersChant;
