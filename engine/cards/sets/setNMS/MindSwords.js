"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindSwords extends Card {
  constructor(game) {
    super(game, "Mind Swords", "Nemesis", "NMS");
  }
}

module.exports = MindSwords;
