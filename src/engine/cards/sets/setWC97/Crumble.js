"use strict";
const Constants = require ("../../../Constants");
const CrumbleBase = require("../setME4/Crumble");

class Crumble extends CrumbleBase {
  constructor (game) {
    super(game, "Crumble", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Crumble;
