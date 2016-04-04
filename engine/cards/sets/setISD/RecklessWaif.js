"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessWaif extends Card {
  constructor(game) {
    super(game, "Reckless Waif", "Innistrad", "ISD");
  }
}

module.exports = RecklessWaif;
