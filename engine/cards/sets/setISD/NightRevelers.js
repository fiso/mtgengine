"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightRevelers extends Card {
  constructor(game) {
    super(game, "Night Revelers", "Innistrad", "ISD");
  }
}

module.exports = NightRevelers;
