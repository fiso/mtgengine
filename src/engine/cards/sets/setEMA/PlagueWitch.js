"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Witch", "Eternal Masters", "EMA");
  }
}

module.exports = PlagueWitch;
