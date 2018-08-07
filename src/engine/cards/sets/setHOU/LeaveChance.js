"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeaveChance extends UnimplementedCard {
  constructor (game) {
    super(game, "Leave // Chance", "Hour of Devastation", "HOU");
  }
}

module.exports = LeaveChance;
