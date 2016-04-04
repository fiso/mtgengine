"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TorpidMoloch extends Card {
  constructor(game) {
    super(game, "Torpid Moloch", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TorpidMoloch;
