"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgentofAcquisitions extends UnimplementedCard {
  constructor (game) {
    super(game, "Agent of Acquisitions", "Conspiracy", "CNS");
  }
}

module.exports = AgentofAcquisitions;
