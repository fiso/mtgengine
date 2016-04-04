"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BriberyBase = require("../set8ED/Bribery.js");

class Bribery extends BriberyBase {
  constructor(game) {
    super(game, "Bribery", "Mercadian Masques", "MMQ");
  }
}

module.exports = Bribery;
