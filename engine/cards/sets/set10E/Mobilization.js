"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MobilizationBase = require("../setC14/Mobilization.js");

class Mobilization extends MobilizationBase {
  constructor(game) {
    super(game, "Mobilization", "Tenth Edition", "10E");
  }
}

module.exports = Mobilization;
