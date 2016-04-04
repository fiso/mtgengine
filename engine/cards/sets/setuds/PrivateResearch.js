"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrivateResearch extends Card {
  constructor(game) {
    super(game, "Private Research", "Urza's Destiny", "UDS");
  }
}

module.exports = PrivateResearch;
