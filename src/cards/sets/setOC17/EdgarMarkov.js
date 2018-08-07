"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EdgarMarkov extends UnimplementedCard {
  constructor (game) {
    super(game, "Edgar Markov", "Commander 2017 Oversized", "OC17");
  }
}

module.exports = EdgarMarkov;
