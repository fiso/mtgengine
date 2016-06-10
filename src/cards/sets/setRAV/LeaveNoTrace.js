"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeaveNoTrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Leave No Trace", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LeaveNoTrace;
