"use strict";
const Constants = require ("../../../Constants");
const NaturalAffinityBase = require("../set9ED/NaturalAffinity");

class NaturalAffinity extends NaturalAffinityBase {
  constructor (game) {
    super(game, "Natural Affinity", "Eighth Edition", "8ED");
  }
}

module.exports = NaturalAffinity;
