"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Massacre extends Card {
  constructor(game) {
    super(game, "Massacre", "Nemesis", "NMS");
  }
}

module.exports = Massacre;
