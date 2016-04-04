"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FieldSurgeon extends Card {
  constructor(game) {
    super(game, "Field Surgeon", "Urza's Destiny", "UDS");
  }
}

module.exports = FieldSurgeon;
