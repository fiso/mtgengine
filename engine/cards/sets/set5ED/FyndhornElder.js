"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FyndhornElderBase = require("../set6ED/FyndhornElder.js");

class FyndhornElder extends FyndhornElderBase {
  constructor(game) {
    super(game, "Fyndhorn Elder", "Fifth Edition", "5ED");
  }
}

module.exports = FyndhornElder;
