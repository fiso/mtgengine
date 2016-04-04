"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenAugur extends Card {
  constructor(game) {
    super(game, "Aven Augur", "Future Sight", "FUT");
  }
}

module.exports = AvenAugur;
