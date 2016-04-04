"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FyndhornElderBase = require("../set6ED/FyndhornElder.js");

class FyndhornElder extends FyndhornElderBase {
  constructor(game) {
    super(game, "Fyndhorn Elder", "Ice Age", "ICE");
  }
}

module.exports = FyndhornElder;
