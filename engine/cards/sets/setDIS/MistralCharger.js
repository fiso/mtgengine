"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistralCharger extends Card {
  constructor(game) {
    super(game, "Mistral Charger", "Dissension", "DIS");
  }
}

module.exports = MistralCharger;
