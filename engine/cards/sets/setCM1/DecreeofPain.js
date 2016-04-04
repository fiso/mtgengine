"use strict";
const Constants = require ("../../../Constants");
const DecreeofPainBase = require("../setC13/DecreeofPain");

class DecreeofPain extends DecreeofPainBase {
  constructor(game) {
    super(game, "Decree of Pain", "Commander's Arsenal", "CM1");
  }
}

module.exports = DecreeofPain;
