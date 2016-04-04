"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LadyEvangelaBase = require("../setLEG/LadyEvangela.js");

class LadyEvangela extends LadyEvangelaBase {
  constructor(game) {
    super(game, "Lady Evangela", "Masters Edition III", "ME3");
  }
}

module.exports = LadyEvangela;
