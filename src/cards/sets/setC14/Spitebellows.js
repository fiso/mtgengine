"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setC13/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Commander 2014", "C14");
  }
}

module.exports = Spitebellows;
