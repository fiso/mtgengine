"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Icequake extends Card {
  constructor(game) {
    super(game, "Icequake", "Ice Age", "ICE");
  }
}

module.exports = Icequake;
