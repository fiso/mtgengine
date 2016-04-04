"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvigoratingFalls extends Card {
  constructor(game) {
    super(game, "Invigorating Falls", "Torment", "TOR");
  }
}

module.exports = InvigoratingFalls;
