"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwatBase = require("../setONS/Swat.js");

class Swat extends SwatBase {
  constructor(game) {
    super(game, "Swat", "Urza's Legacy", "ULG");
  }
}

module.exports = Swat;
