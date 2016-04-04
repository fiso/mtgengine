"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimberpackWolf extends Card {
  constructor(game) {
    super(game, "Timberpack Wolf", "Magic 2013", "M13");
  }
}

module.exports = TimberpackWolf;
