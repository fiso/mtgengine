"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HallowedBurial extends Card {
  constructor(game) {
    super(game, "Hallowed Burial", "Eventide", "EVE");
  }
}

module.exports = HallowedBurial;
