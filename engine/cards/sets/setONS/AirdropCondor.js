"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirdropCondor extends UnimplementedCard {
  constructor(game) {
    super(game, "Airdrop Condor", "Onslaught", "ONS");
  }
}

module.exports = AirdropCondor;
