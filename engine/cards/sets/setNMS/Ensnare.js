"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ensnare extends Card {
  constructor(game) {
    super(game, "Ensnare", "Nemesis", "NMS");
  }
}

module.exports = Ensnare;
