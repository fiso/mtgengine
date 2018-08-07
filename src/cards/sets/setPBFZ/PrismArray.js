"use strict";
const Constants = require ("../../../Constants");
const PrismArrayBase = require("../setBFZ/PrismArray");

class PrismArray extends PrismArrayBase {
  constructor (game) {
    super(game, "Prism Array", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = PrismArray;
