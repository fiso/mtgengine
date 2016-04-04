"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YamabushisStorm extends Card {
  constructor(game) {
    super(game, "Yamabushi's Storm", "Champions of Kamigawa", "CHK");
  }
}

module.exports = YamabushisStorm;
