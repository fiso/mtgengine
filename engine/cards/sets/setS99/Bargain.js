"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BargainBase = require("../setPO2/Bargain.js");

class Bargain extends BargainBase {
  constructor(game) {
    super(game, "Bargain", "Starter 1999", "S99");
  }
}

module.exports = Bargain;
