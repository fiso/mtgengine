"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setCM2/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Commander 2011", "CMD");
  }
}

module.exports = Spitebellows;
