"use strict";
const Constants = require ("../../../Constants");
const SaltMarshBase = require("../set8ED/SaltMarsh");

class SaltMarsh extends SaltMarshBase {
  constructor (game) {
    super(game, "Salt Marsh", "World Championship Decks 2001", "WC01");
  }
}

module.exports = SaltMarsh;
