"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcboundLancer extends Card {
  constructor(game) {
    super(game, "Arcbound Lancer", "Darksteel", "DST");
  }
}

module.exports = ArcboundLancer;
