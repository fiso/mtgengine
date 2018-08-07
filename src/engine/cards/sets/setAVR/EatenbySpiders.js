"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EatenbySpiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Eaten by Spiders", "Avacyn Restored", "AVR");
  }
}

module.exports = EatenbySpiders;
