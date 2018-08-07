"use strict";
const Constants = require ("../../../Constants");
const MishrasFactoryBase = require("../setA25/MishrasFactory");

class MishrasFactory extends MishrasFactoryBase {
  constructor (game) {
    super(game, "Mishra's Factory", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = MishrasFactory;
