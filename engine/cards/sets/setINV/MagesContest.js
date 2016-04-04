"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagesContest extends Card {
  constructor(game) {
    super(game, "Mages' Contest", "Invasion", "INV");
  }
}

module.exports = MagesContest;
