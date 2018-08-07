"use strict";
const Constants = require ("../../../Constants");
const NetherSpiritBase = require("../setWC01/NetherSpirit");

class NetherSpirit extends NetherSpiritBase {
  constructor (game) {
    super(game, "Nether Spirit", "Mercadian Masques", "MMQ");
  }
}

module.exports = NetherSpirit;
