"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HystericalBlindness extends Card {
  constructor(game) {
    super(game, "Hysterical Blindness", "Innistrad", "ISD");
  }
}

module.exports = HystericalBlindness;
