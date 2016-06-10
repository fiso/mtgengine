"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnocentBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Innocent Blood", "Odyssey", "ODY");
  }
}

module.exports = InnocentBlood;
