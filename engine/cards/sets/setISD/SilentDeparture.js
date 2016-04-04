"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentDeparture extends Card {
  constructor(game) {
    super(game, "Silent Departure", "Innistrad", "ISD");
  }
}

module.exports = SilentDeparture;
