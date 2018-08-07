"use strict";
const Constants = require ("../../../Constants");
const WhipflareBase = require("../setCM2/Whipflare");

class Whipflare extends WhipflareBase {
  constructor (game) {
    super(game, "Whipflare", "Commander 2016", "C16");
  }
}

module.exports = Whipflare;
