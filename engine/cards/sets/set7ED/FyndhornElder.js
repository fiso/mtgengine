"use strict";
const Constants = require ("../../../Constants");
const FyndhornElderBase = require("../set6ED/FyndhornElder");

class FyndhornElder extends FyndhornElderBase {
  constructor(game) {
    super(game, "Fyndhorn Elder", "Seventh Edition", "7ED");
  }
}

module.exports = FyndhornElder;
