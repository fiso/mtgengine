"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkovPatrician extends Card {
  constructor(game) {
    super(game, "Markov Patrician", "Innistrad", "ISD");
  }
}

module.exports = MarkovPatrician;
