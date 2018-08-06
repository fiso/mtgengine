"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Entomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Entomb", "Eternal Masters", "EMA");
  }
}

module.exports = Entomb;
