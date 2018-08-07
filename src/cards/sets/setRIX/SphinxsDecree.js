"use strict";
const Constants = require ("../../../Constants");
const SphinxsDecreeBase = require("../setPRIX/SphinxsDecree");

class SphinxsDecree extends SphinxsDecreeBase {
  constructor (game) {
    super(game, "Sphinx's Decree", "Rivals of Ixalan", "RIX");
  }
}

module.exports = SphinxsDecree;
