"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Manalith extends Card {
  constructor(game) {
    super(game, "Manalith", "Magic 2012", "M12");
  }
}

module.exports = Manalith;
