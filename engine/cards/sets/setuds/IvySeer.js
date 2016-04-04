"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvySeer extends Card {
  constructor(game) {
    super(game, "Ivy Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = IvySeer;
