"use strict";
const Constants = require ("../../../Constants");
const KeytotheCityBase = require("../setKLD/KeytotheCity");

class KeytotheCity extends KeytotheCityBase {
  constructor (game) {
    super(game, "Key to the City", "Kaladesh Promos", "PKLD");
  }
}

module.exports = KeytotheCity;
