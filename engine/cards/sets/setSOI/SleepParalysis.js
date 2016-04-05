"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleepParalysis extends UnimplementedCard {
  constructor(game) {
    super(game, "Sleep Paralysis", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SleepParalysis;
