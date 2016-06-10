"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KruinStriker extends UnimplementedCard {
  constructor (game) {
    super(game, "Kruin Striker", "Avacyn Restored", "AVR");
  }
}

module.exports = KruinStriker;
