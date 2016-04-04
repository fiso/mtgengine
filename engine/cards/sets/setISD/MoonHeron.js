"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonHeron extends Card {
  constructor(game) {
    super(game, "Moon Heron", "Innistrad", "ISD");
  }
}

module.exports = MoonHeron;
