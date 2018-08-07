"use strict";
const Constants = require ("../../../Constants");
const NaturalAffinityBase = require("../set9ED/NaturalAffinity");

class NaturalAffinity extends NaturalAffinityBase {
  constructor (game) {
    super(game, "Natural Affinity", "Mercadian Masques", "MMQ");
  }
}

module.exports = NaturalAffinity;
