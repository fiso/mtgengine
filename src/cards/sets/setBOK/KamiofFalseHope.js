"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamiofFalseHope extends UnimplementedCard {
  constructor (game) {
    super(game, "Kami of False Hope", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KamiofFalseHope;
