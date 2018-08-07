"use strict";
const Constants = require ("../../../Constants");
const RootKinAllyBase = require("../setMM2/RootKinAlly");

class RootKinAlly extends RootKinAllyBase {
  constructor (game) {
    super(game, "Root-Kin Ally", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RootKinAlly;
