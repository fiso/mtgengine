"use strict";
const Constants = require ("../../../Constants");
const SmotherBase = require("../setDDP/Smother");

class Smother extends SmotherBase {
  constructor (game) {
    super(game, "Smother", "World Championship Decks 2003", "WC03");
  }
}

module.exports = Smother;
