"use strict";
const Constants = require ("../../../Constants");
const BorosCluestoneBase = require("../setCM2/BorosCluestone");

class BorosCluestone extends BorosCluestoneBase {
  constructor (game) {
    super(game, "Boros Cluestone", "Commander 2015", "C15");
  }
}

module.exports = BorosCluestone;
