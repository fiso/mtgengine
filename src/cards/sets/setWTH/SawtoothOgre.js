"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SawtoothOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Sawtooth Ogre", "Weatherlight", "WTH");
  }
}

module.exports = SawtoothOgre;
