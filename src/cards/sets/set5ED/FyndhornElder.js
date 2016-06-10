"use strict";
const Constants = require ("../../../Constants");
const FyndhornElderBase = require("../set6ED/FyndhornElder");

class FyndhornElder extends FyndhornElderBase {
  constructor (game) {
    super(game, "Fyndhorn Elder", "Fifth Edition", "5ED");
  }
}

module.exports = FyndhornElder;
