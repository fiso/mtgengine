"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SagesKnowledge extends Card {
  constructor(game) {
    super(game, "Sage's Knowledge", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SagesKnowledge;
