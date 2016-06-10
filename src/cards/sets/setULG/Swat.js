"use strict";
const Constants = require ("../../../Constants");
const SwatBase = require("../setONS/Swat");

class Swat extends SwatBase {
  constructor (game) {
    super(game, "Swat", "Urza's Legacy", "ULG");
  }
}

module.exports = Swat;
