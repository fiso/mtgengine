"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setM19/Shock");

class Shock extends ShockBase {
  constructor (game) {
    super(game, "Shock", "World Championship Decks 1998", "WC98");
  }
}

module.exports = Shock;
