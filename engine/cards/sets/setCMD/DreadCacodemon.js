"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreadCacodemon extends Card {
  constructor(game) {
    super(game, "Dread Cacodemon", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DreadCacodemon;
