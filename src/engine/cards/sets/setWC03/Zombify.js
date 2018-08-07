"use strict";
const Constants = require ("../../../Constants");
const ZombifyBase = require("../setA25/Zombify");

class Zombify extends ZombifyBase {
  constructor (game) {
    super(game, "Zombify", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Zombify;
