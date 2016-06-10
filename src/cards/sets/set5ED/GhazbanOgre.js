"use strict";
const Constants = require ("../../../Constants");
const GhazbanOgreBase = require("../setARN/GhazbanOgre");

class GhazbanOgre extends GhazbanOgreBase {
  constructor (game) {
    super(game, "Ghazbán Ogre", "Fifth Edition", "5ED");
  }
}

module.exports = GhazbanOgre;
