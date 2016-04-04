"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SawtoothOgre extends Card {
  constructor(game) {
    super(game, "Sawtooth Ogre", "Weatherlight", "WTH");
  }
}

module.exports = SawtoothOgre;
