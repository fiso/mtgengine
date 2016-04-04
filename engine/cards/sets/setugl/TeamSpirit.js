"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeamSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Team Spirit", "Unglued", "UGL");
  }
}

module.exports = TeamSpirit;
