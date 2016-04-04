"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WrapinVigor extends Card {
  constructor(game) {
    super(game, "Wrap in Vigor", "Future Sight", "FUT");
  }
}

module.exports = WrapinVigor;
