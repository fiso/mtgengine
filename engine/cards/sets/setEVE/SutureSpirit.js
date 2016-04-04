"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SutureSpirit extends Card {
  constructor(game) {
    super(game, "Suture Spirit", "Eventide", "EVE");
  }
}

module.exports = SutureSpirit;
