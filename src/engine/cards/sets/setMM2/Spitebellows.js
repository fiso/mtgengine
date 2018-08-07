"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setCM2/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Modern Masters 2015", "MM2");
  }
}

module.exports = Spitebellows;
