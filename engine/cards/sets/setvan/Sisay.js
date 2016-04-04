"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sisay extends Card {
  constructor(game) {
    super(game, "Sisay", "Vanguard", "VAN");
  }
}

module.exports = Sisay;
