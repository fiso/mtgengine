"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DroolingOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Drooling Ogre", "Darksteel", "DST");
  }
}

module.exports = DroolingOgre;
