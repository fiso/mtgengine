"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GavonyTownship extends Card {
  constructor(game) {
    super(game, "Gavony Township", "Innistrad", "ISD");
  }
}

module.exports = GavonyTownship;
