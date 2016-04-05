"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrageOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Barrage Ogre", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BarrageOgre;
