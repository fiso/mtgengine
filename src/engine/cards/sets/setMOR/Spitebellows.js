"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setCM2/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Morningtide", "MOR");
  }
}

module.exports = Spitebellows;
