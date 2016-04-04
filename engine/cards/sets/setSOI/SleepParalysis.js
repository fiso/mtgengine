"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SleepParalysis extends Card {
  constructor(game) {
    super(game, "Sleep Paralysis", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SleepParalysis;
