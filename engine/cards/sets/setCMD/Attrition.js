"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Attrition extends Card {
  constructor(game) {
    super(game, "Attrition", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Attrition;
