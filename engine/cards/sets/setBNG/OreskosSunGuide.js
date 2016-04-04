"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OreskosSunGuide extends Card {
  constructor(game) {
    super(game, "Oreskos Sun Guide", "Born of the Gods", "BNG");
  }
}

module.exports = OreskosSunGuide;
