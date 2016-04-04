"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AirdropCondor extends Card {
  constructor(game) {
    super(game, "Airdrop Condor", "Onslaught", "ONS");
  }
}

module.exports = AirdropCondor;
