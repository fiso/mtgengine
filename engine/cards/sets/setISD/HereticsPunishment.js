"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HereticsPunishment extends Card {
  constructor(game) {
    super(game, "Heretic's Punishment", "Innistrad", "ISD");
  }
}

module.exports = HereticsPunishment;
