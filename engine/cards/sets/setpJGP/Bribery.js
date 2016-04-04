"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BriberyBase = require("../set8ED/Bribery.js");

class Bribery extends BriberyBase {
  constructor(game) {
    super(game, "Bribery", "Judge Gift Program", "pJGP");
  }
}

module.exports = Bribery;
