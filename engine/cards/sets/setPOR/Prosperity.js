"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ProsperityBase = require("../set6ED/Prosperity.js");

class Prosperity extends ProsperityBase {
  constructor(game) {
    super(game, "Prosperity", "Portal", "POR");
  }
}

module.exports = Prosperity;
