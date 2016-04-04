"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootKinAllyBase = require("../setMM2/RootKinAlly.js");

class RootKinAlly extends RootKinAllyBase {
  constructor(game) {
    super(game, "Root-Kin Ally", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RootKinAlly;
