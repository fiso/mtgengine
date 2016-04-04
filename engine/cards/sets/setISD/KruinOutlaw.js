"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KruinOutlaw extends Card {
  constructor(game) {
    super(game, "Kruin Outlaw", "Innistrad", "ISD");
  }
}

module.exports = KruinOutlaw;
