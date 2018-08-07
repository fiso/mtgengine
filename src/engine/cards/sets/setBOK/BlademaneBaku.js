"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlademaneBaku extends UnimplementedCard {
  constructor (game) {
    super(game, "Blademane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlademaneBaku;
