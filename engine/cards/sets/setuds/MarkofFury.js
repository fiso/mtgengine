"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkofFury extends Card {
  constructor(game) {
    super(game, "Mark of Fury", "Urza's Destiny", "UDS");
  }
}

module.exports = MarkofFury;
