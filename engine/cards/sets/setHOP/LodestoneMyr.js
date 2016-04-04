"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LodestoneMyrBase = require("../setMRD/LodestoneMyr.js");

class LodestoneMyr extends LodestoneMyrBase {
  constructor(game) {
    super(game, "Lodestone Myr", "Planechase", "HOP");
  }
}

module.exports = LodestoneMyr;
