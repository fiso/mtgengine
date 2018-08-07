"use strict";
const Constants = require ("../../../Constants");
const DecreeofPainBase = require("../setC17/DecreeofPain");

class DecreeofPain extends DecreeofPainBase {
  constructor (game) {
    super(game, "Decree of Pain", "Commander 2013", "C13");
  }
}

module.exports = DecreeofPain;
