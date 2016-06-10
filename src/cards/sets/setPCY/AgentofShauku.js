"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AgentofShauku extends UnimplementedCard {
  constructor (game) {
    super(game, "Agent of Shauku", "Prophecy", "PCY");
  }
}

module.exports = AgentofShauku;
