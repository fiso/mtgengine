"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setARC/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = Island;
