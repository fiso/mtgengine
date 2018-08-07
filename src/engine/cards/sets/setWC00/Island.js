"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Island;
