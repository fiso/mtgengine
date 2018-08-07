"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setCM2/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Commander 2013", "C13");
  }
}

module.exports = Spitebellows;
