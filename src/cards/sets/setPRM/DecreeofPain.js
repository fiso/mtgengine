"use strict";
const Constants = require ("../../../Constants");
const DecreeofPainBase = require("../setC17/DecreeofPain");

class DecreeofPain extends DecreeofPainBase {
  constructor (game) {
    super(game, "Decree of Pain", "Magic Online Promos", "PRM");
  }
}

module.exports = DecreeofPain;
