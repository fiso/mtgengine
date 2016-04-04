"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ragemonger extends Card {
  constructor(game) {
    super(game, "Ragemonger", "Born of the Gods", "BNG");
  }
}

module.exports = Ragemonger;
