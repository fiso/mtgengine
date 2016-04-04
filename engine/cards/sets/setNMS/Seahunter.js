"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Seahunter extends Card {
  constructor(game) {
    super(game, "Seahunter", "Nemesis", "NMS");
  }
}

module.exports = Seahunter;
