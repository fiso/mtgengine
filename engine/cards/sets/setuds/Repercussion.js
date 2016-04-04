"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Repercussion extends Card {
  constructor(game) {
    super(game, "Repercussion", "Urza's Destiny", "UDS");
  }
}

module.exports = Repercussion;
