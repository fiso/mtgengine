"use strict";
const Constants = require ("../../../Constants");
const IronclawOrcsBase = require("../setME2/IronclawOrcs");

class IronclawOrcs extends IronclawOrcsBase {
  constructor (game) {
    super(game, "Ironclaw Orcs", "World Championship Decks 1998", "WC98");
  }
}

module.exports = IronclawOrcs;
