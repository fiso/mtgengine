"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RagnarBase = require("../setLEG/Ragnar.js");

class Ragnar extends RagnarBase {
  constructor(game) {
    super(game, "Ragnar", "Masters Edition III", "ME3");
  }
}

module.exports = Ragnar;
