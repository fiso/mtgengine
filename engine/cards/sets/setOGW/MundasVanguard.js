"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MundasVanguard extends Card {
  constructor(game) {
    super(game, "Munda's Vanguard", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MundasVanguard;
