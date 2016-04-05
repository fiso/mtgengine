"use strict";
const Constants = require ("../../../Constants");
const NaturalAffinityBase = require("../set8ED/NaturalAffinity");

class NaturalAffinity extends NaturalAffinityBase {
  constructor(game) {
    super(game, "Natural Affinity", "Ninth Edition", "9ED");
  }
}

module.exports = NaturalAffinity;
