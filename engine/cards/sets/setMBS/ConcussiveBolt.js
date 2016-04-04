"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConcussiveBolt extends Card {
  constructor(game) {
    super(game, "Concussive Bolt", "Mirrodin Besieged", "MBS");
  }
}

module.exports = ConcussiveBolt;
