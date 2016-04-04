"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfectiousHost extends Card {
  constructor(game) {
    super(game, "Infectious Host", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = InfectiousHost;
