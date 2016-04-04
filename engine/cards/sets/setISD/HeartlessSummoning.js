"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeartlessSummoning extends Card {
  constructor(game) {
    super(game, "Heartless Summoning", "Innistrad", "ISD");
  }
}

module.exports = HeartlessSummoning;
