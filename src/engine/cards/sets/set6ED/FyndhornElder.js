"use strict";
const Constants = require ("../../../Constants");
const FyndhornElderBase = require("../set8ED/FyndhornElder");

class FyndhornElder extends FyndhornElderBase {
  constructor (game) {
    super(game, "Fyndhorn Elder", "Classic Sixth Edition", "6ED");
  }
}

module.exports = FyndhornElder;
