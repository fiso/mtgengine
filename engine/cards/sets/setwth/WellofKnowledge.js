"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WellofKnowledge extends Card {
  constructor(game) {
    super(game, "Well of Knowledge", "Weatherlight", "WTH");
  }
}

module.exports = WellofKnowledge;
