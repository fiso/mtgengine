"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredWarhorse extends Card {
  constructor(game) {
    super(game, "Armored Warhorse", "Magic 2012", "M12");
  }
}

module.exports = ArmoredWarhorse;
