"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PullUnder extends Card {
  constructor(game) {
    super(game, "Pull Under", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PullUnder;
