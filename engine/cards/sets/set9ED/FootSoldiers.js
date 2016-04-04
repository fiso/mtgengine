"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FootSoldiers extends Card {
  constructor(game) {
    super(game, "Foot Soldiers", "Ninth Edition", "9ED");
  }
}

module.exports = FootSoldiers;
