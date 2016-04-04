"use strict";
const Constants = require ("../../../Constants");
const WhipflareBase = require("../setC14/Whipflare");

class Whipflare extends WhipflareBase {
  constructor(game) {
    super(game, "Whipflare", "New Phyrexia", "NPH");
  }
}

module.exports = Whipflare;
