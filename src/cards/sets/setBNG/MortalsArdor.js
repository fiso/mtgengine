"use strict";
const Constants = require ("../../../Constants");
const MortalsArdorBase = require("../setDDO/MortalsArdor");

class MortalsArdor extends MortalsArdorBase {
  constructor (game) {
    super(game, "Mortal's Ardor", "Born of the Gods", "BNG");
  }
}

module.exports = MortalsArdor;
