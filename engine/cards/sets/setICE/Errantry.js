"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErrantryBase = require("../set5ED/Errantry.js");

class Errantry extends ErrantryBase {
  constructor(game) {
    super(game, "Errantry", "Ice Age", "ICE");
  }
}

module.exports = Errantry;
