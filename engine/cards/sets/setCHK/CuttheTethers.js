"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CuttheTethers extends Card {
  constructor(game) {
    super(game, "Cut the Tethers", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CuttheTethers;
