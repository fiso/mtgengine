"use strict";
const Constants = require ("../../../Constants");
const CloudpostBase = require("../setF10/Cloudpost");

class Cloudpost extends CloudpostBase {
  constructor (game) {
    super(game, "Cloudpost", "World Championship Decks 2004", "WC04");
  }
}

module.exports = Cloudpost;
