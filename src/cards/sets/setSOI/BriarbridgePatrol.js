"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BriarbridgePatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Briarbridge Patrol", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BriarbridgePatrol;
