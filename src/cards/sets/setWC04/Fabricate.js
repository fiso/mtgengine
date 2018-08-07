"use strict";
const Constants = require ("../../../Constants");
const FabricateBase = require("../setHOP/Fabricate");

class Fabricate extends FabricateBase {
  constructor (game) {
    super(game, "Fabricate", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Fabricate;
