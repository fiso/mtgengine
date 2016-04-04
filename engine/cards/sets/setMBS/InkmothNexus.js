"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InkmothNexus extends Card {
  constructor(game) {
    super(game, "Inkmoth Nexus", "Mirrodin Besieged", "MBS");
  }
}

module.exports = InkmothNexus;
