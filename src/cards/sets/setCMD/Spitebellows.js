"use strict";
const Constants = require ("../../../Constants");
const SpitebellowsBase = require("../setC13/Spitebellows");

class Spitebellows extends SpitebellowsBase {
  constructor (game) {
    super(game, "Spitebellows", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Spitebellows;
