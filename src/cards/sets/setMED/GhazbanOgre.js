"use strict";
const Constants = require ("../../../Constants");
const GhazbanOgreBase = require("../setARN/GhazbanOgre");

class GhazbanOgre extends GhazbanOgreBase {
  constructor(game) {
    super(game, "Ghazbán Ogre", "Masters Edition", "MED");
  }
}

module.exports = GhazbanOgre;
