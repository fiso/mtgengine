"use strict";
const Constants = require ("../../../Constants");
const GhazbánOgreBase = require("../setARN/GhazbánOgre");

class GhazbánOgre extends GhazbánOgreBase {
  constructor(game) {
    super(game, "Ghazbán Ogre", "Masters Edition", "MED");
  }
}

module.exports = GhazbánOgre;
