"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DerangedAssistant extends Card {
  constructor(game) {
    super(game, "Deranged Assistant", "Innistrad", "ISD");
  }
}

module.exports = DerangedAssistant;
