"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CranialPlatingBase = require("../set5DN/CranialPlating.js");

class CranialPlating extends CranialPlatingBase {
  constructor(game) {
    super(game, "Cranial Plating", "Planechase", "HOP");
  }
}

module.exports = CranialPlating;
