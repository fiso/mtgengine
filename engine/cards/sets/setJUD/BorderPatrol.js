"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderPatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Border Patrol", "Judgment", "JUD");
  }
}

module.exports = BorderPatrol;
