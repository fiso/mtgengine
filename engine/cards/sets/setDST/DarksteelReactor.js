"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelReactor extends Card {
  constructor(game) {
    super(game, "Darksteel Reactor", "Darksteel", "DST");
  }
}

module.exports = DarksteelReactor;
