"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightyEmergence extends UnimplementedCard {
  constructor (game) {
    super(game, "Mighty Emergence", "Shards of Alara", "ALA");
  }
}

module.exports = MightyEmergence;
