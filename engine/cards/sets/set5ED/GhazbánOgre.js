"use strict";
const Constants = require ("../../../Constants");
const GhazbánOgreBase = require("../setARN/GhazbánOgre");

class GhazbánOgre extends GhazbánOgreBase {
  constructor(game) {
    super(game, "Ghazbán Ogre", "Fifth Edition", "5ED");
  }
}

module.exports = GhazbánOgre;
