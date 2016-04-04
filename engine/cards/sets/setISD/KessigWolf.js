"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KessigWolf extends Card {
  constructor(game) {
    super(game, "Kessig Wolf", "Innistrad", "ISD");
  }
}

module.exports = KessigWolf;
