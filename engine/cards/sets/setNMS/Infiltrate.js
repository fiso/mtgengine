"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Infiltrate extends Card {
  constructor(game) {
    super(game, "Infiltrate", "Nemesis", "NMS");
  }
}

module.exports = Infiltrate;
