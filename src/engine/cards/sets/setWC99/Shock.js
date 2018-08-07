"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setM19/Shock");

class Shock extends ShockBase {
  constructor (game) {
    super(game, "Shock", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Shock;
