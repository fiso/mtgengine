"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlailingOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Flailing Ogre", "Mercadian Masques", "MMQ");
  }
}

module.exports = FlailingOgre;
