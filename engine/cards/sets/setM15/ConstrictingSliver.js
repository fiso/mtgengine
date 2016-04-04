"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConstrictingSliver extends Card {
  constructor(game) {
    super(game, "Constricting Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ConstrictingSliver;
