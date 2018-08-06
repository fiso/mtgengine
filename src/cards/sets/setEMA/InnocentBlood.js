"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnocentBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "Innocent Blood", "Eternal Masters", "EMA");
  }
}

module.exports = InnocentBlood;
