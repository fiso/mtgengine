"use strict";
const Constants = require ("../../../Constants");
const BirdsofParadiseBase = require("../setCN2/BirdsofParadise");

class BirdsofParadise extends BirdsofParadiseBase {
  constructor (game) {
    super(game, "Birds of Paradise", "World Championship Decks 2000", "WC00");
  }
}

module.exports = BirdsofParadise;
