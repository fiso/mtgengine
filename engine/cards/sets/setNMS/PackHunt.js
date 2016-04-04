"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PackHunt extends Card {
  constructor(game) {
    super(game, "Pack Hunt", "Nemesis", "NMS");
  }
}

module.exports = PackHunt;
