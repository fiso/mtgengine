"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OngoingInvestigation extends Card {
  constructor(game) {
    super(game, "Ongoing Investigation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OngoingInvestigation;
