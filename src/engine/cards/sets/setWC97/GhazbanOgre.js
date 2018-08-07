"use strict";
const Constants = require ("../../../Constants");
const GhazbanOgreBase = require("../setMED/GhazbanOgre");

class GhazbanOgre extends GhazbanOgreBase {
  constructor (game) {
    super(game, "Ghazbán Ogre", "World Championship Decks 1997", "WC97");
  }
}

module.exports = GhazbanOgre;
