"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelPendant extends Card {
  constructor(game) {
    super(game, "Darksteel Pendant", "Darksteel", "DST");
  }
}

module.exports = DarksteelPendant;
