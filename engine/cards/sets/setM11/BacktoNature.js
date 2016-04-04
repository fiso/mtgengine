"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BacktoNature extends Card {
  constructor(game) {
    super(game, "Back to Nature", "Magic 2011", "M11");
  }
}

module.exports = BacktoNature;
