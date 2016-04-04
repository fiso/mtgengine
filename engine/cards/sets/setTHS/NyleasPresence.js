"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NyleasPresence extends Card {
  constructor(game) {
    super(game, "Nylea's Presence", "Theros", "THS");
  }
}

module.exports = NyleasPresence;
