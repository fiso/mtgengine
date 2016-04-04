"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianMarauder extends Card {
  constructor(game) {
    super(game, "Phyrexian Marauder", "Visions", "VIS");
  }
}

module.exports = PhyrexianMarauder;
