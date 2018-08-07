"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrueNameNemesis extends UnimplementedCard {
  constructor (game) {
    super(game, "True-Name Nemesis", "Battlebond", "BBD");
  }
}

module.exports = TrueNameNemesis;
