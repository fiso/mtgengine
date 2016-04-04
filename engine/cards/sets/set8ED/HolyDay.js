"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HolyDay extends Card {
  constructor(game) {
    super(game, "Holy Day", "Eighth Edition", "8ED");
  }
}

module.exports = HolyDay;
