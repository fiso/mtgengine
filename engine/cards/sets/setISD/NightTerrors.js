"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NightTerrors extends Card {
  constructor(game) {
    super(game, "Night Terrors", "Innistrad", "ISD");
  }
}

module.exports = NightTerrors;
