"use strict";
const Constants = require ("../../../Constants");
const DecreeofPainBase = require("../setC17/DecreeofPain");

class DecreeofPain extends DecreeofPainBase {
  constructor (game) {
    super(game, "Decree of Pain", "Legendary Cube", "PZ1");
  }
}

module.exports = DecreeofPain;
