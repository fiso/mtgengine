"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OozeGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Ooze Garden", "Shards of Alara", "ALA");
  }
}

module.exports = OozeGarden;
