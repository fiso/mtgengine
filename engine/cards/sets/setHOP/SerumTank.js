"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerumTankBase = require("../setMRD/SerumTank.js");

class SerumTank extends SerumTankBase {
  constructor(game) {
    super(game, "Serum Tank", "Planechase", "HOP");
  }
}

module.exports = SerumTank;
