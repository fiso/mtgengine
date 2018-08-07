"use strict";
const Constants = require ("../../../Constants");
const FireDiamondBase = require("../setCM2/FireDiamond");

class FireDiamond extends FireDiamondBase {
  constructor (game) {
    super(game, "Fire Diamond", "World Championship Decks 1999", "WC99");
  }
}

module.exports = FireDiamond;
