"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranGolem extends Card {
  constructor(game) {
    super(game, "Thran Golem", "Magic 2012", "M12");
  }
}

module.exports = ThranGolem;
