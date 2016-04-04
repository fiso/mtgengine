"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshestoAshesBase = require("../set5ED/AshestoAshes.js");

class AshestoAshes extends AshestoAshesBase {
  constructor(game) {
    super(game, "Ashes to Ashes", "Masters Edition III", "ME3");
  }
}

module.exports = AshestoAshes;
