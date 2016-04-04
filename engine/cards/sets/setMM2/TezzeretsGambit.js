"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TezzeretsGambit extends Card {
  constructor(game) {
    super(game, "Tezzeret's Gambit", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TezzeretsGambit;
