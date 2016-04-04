"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoliathBeetle extends Card {
  constructor(game) {
    super(game, "Goliath Beetle", "Urza's Destiny", "UDS");
  }
}

module.exports = GoliathBeetle;
