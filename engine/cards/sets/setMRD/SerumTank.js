"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SerumTank extends Card {
  constructor(game) {
    super(game, "Serum Tank", "Mirrodin", "MRD");
  }
}

module.exports = SerumTank;
