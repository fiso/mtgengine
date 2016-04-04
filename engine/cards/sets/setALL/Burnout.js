"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Burnout extends Card {
  constructor(game) {
    super(game, "Burnout", "Alliances", "ALL");
  }
}

module.exports = Burnout;
