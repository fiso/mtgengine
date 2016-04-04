"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChainerDementiaMaster extends Card {
  constructor(game) {
    super(game, "Chainer, Dementia Master", "Torment", "TOR");
  }
}

module.exports = ChainerDementiaMaster;
