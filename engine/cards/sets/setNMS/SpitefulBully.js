"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpitefulBully extends Card {
  constructor(game) {
    super(game, "Spiteful Bully", "Nemesis", "NMS");
  }
}

module.exports = SpitefulBully;
