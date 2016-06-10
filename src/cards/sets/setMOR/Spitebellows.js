"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setC13/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Morningtide", "MOR");
  }
}

module.exports = Spitebellows;
