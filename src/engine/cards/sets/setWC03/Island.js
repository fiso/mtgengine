"use strict";
const Constants = require ("../../../Constants");
const IslandBase = require("../setC18/Island");

class Island extends IslandBase {
  constructor (game) {
    super(game, "Island", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Island;
