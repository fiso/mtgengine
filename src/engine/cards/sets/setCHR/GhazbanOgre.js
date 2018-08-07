"use strict";
const Constants = require ("../../../Constants");
const GhazbanOgreBase = require("../setMED/GhazbanOgre");

class GhazbanOgre extends GhazbanOgreBase {
  constructor (game) {
    super(game, "Ghazbán Ogre", "Chronicles", "CHR");
  }
}

module.exports = GhazbanOgre;
