"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueWitch extends Card {
  constructor(game) {
    super(game, "Plague Witch", "Nemesis", "NMS");
  }
}

module.exports = PlagueWitch;
