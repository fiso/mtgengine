"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhalniGarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Khalni Garden", "Commander 2018", "C18");
  }
}

module.exports = KhalniGarden;
