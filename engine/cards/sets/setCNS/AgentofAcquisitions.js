"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgentofAcquisitions extends Card {
  constructor(game) {
    super(game, "Agent of Acquisitions", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AgentofAcquisitions;
