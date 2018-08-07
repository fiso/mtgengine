"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDelverBase = require("../setC18/PhyrexianDelver");

class PhyrexianDelver extends PhyrexianDelverBase {
  constructor (game) {
    super(game, "Phyrexian Delver", "Commander 2013", "C13");
  }
}

module.exports = PhyrexianDelver;
