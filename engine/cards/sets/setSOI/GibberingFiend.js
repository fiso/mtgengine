"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GibberingFiend extends Card {
  constructor(game) {
    super(game, "Gibbering Fiend", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GibberingFiend;
