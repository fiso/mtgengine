"use strict";
const Constants = require ("../../../Constants");
const PariahBase = require("../setCN2/Pariah");

class Pariah extends PariahBase {
  constructor (game) {
    super(game, "Pariah", "Urza's Saga", "USG");
  }
}

module.exports = Pariah;
