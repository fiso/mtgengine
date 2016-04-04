"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrikingSliver extends Card {
  constructor(game) {
    super(game, "Striking Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = StrikingSliver;
