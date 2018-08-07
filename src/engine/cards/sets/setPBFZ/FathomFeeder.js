"use strict";
const Constants = require ("../../../Constants");
const FathomFeederBase = require("../setBFZ/FathomFeeder");

class FathomFeeder extends FathomFeederBase {
  constructor (game) {
    super(game, "Fathom Feeder", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = FathomFeeder;
