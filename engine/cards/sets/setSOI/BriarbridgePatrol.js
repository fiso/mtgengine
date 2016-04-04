"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BriarbridgePatrol extends Card {
  constructor(game) {
    super(game, "Briarbridge Patrol", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BriarbridgePatrol;
