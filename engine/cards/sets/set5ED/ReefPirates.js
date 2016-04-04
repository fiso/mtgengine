"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReefPirates extends Card {
  constructor(game) {
    super(game, "Reef Pirates", "Fifth Edition", "5ED");
  }
}

module.exports = ReefPirates;
