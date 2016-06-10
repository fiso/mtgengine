"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HomurasEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Homura's Essence", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HomurasEssence;
