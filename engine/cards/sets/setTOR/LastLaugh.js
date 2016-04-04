"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LastLaugh extends Card {
  constructor(game) {
    super(game, "Last Laugh", "Torment", "TOR");
  }
}

module.exports = LastLaugh;
