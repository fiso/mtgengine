"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CapashenStandard extends Card {
  constructor(game) {
    super(game, "Capashen Standard", "Urza's Destiny", "UDS");
  }
}

module.exports = CapashenStandard;
