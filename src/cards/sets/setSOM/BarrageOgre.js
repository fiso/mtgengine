"use strict";
const Constants = require ("../../../Constants");
const BarrageOgreBase = require("../setDDU/BarrageOgre");

class BarrageOgre extends BarrageOgreBase {
  constructor (game) {
    super(game, "Barrage Ogre", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BarrageOgre;
