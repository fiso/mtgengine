"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnnerveBase = require("../setBRB/Unnerve.js");

class Unnerve extends UnnerveBase {
  constructor(game) {
    super(game, "Unnerve", "Urza's Saga", "USG");
  }
}

module.exports = Unnerve;
