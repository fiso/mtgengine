"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkovPatrician extends UnimplementedCard {
  constructor (game) {
    super(game, "Markov Patrician", "Innistrad", "ISD");
  }
}

module.exports = MarkovPatrician;
