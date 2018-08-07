"use strict";
const Constants = require ("../../../Constants");
const AbeyanceBase = require("../setWC98/Abeyance");

class Abeyance extends AbeyanceBase {
  constructor (game) {
    super(game, "Abeyance", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Abeyance;
