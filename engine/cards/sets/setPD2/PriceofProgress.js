"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PriceofProgressBase = require("../setEXO/PriceofProgress.js");

class PriceofProgress extends PriceofProgressBase {
  constructor(game) {
    super(game, "Price of Progress", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = PriceofProgress;
