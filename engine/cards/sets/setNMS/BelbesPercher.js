"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelbesPercher extends Card {
  constructor(game) {
    super(game, "Belbe's Percher", "Nemesis", "NMS");
  }
}

module.exports = BelbesPercher;
