"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeEbb extends Card {
  constructor(game) {
    super(game, "Time Ebb", "Magic 2014 Core Set", "M14");
  }
}

module.exports = TimeEbb;
