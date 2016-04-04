"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeamSpirit extends Card {
  constructor(game) {
    super(game, "Team Spirit", "Unglued", "UGL");
  }
}

module.exports = TeamSpirit;
