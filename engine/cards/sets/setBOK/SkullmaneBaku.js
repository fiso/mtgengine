"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullmaneBaku extends UnimplementedCard {
  constructor(game) {
    super(game, "Skullmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SkullmaneBaku;
