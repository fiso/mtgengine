"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarrageOgre extends Card {
  constructor(game) {
    super(game, "Barrage Ogre", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BarrageOgre;
