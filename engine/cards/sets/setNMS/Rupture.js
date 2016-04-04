"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Rupture extends Card {
  constructor(game) {
    super(game, "Rupture", "Nemesis", "NMS");
  }
}

module.exports = Rupture;
