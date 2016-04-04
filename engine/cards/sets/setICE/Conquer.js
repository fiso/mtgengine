"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConquerBase = require("../set6ED/Conquer.js");

class Conquer extends ConquerBase {
  constructor(game) {
    super(game, "Conquer", "Ice Age", "ICE");
  }
}

module.exports = Conquer;
