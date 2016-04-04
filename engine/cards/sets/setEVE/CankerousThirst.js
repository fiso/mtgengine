"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CankerousThirst extends Card {
  constructor(game) {
    super(game, "Cankerous Thirst", "Eventide", "EVE");
  }
}

module.exports = CankerousThirst;
