"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AgentofShauku extends Card {
  constructor(game) {
    super(game, "Agent of Shauku", "Prophecy", "PCY");
  }
}

module.exports = AgentofShauku;
