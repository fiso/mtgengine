"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OngoingInvestigation extends UnimplementedCard {
  constructor(game) {
    super(game, "Ongoing Investigation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OngoingInvestigation;
