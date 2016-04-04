"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildMammoth extends Card {
  constructor(game) {
    super(game, "Wild Mammoth", "Nemesis", "NMS");
  }
}

module.exports = WildMammoth;
