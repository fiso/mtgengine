"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GorillaChieftain extends Card {
  constructor(game) {
    super(game, "Gorilla Chieftain", "Alliances", "ALL");
  }
}

module.exports = GorillaChieftain;
