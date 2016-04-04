"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FanaticalDevotion extends Card {
  constructor(game) {
    super(game, "Fanatical Devotion", "Nemesis", "NMS");
  }
}

module.exports = FanaticalDevotion;
