"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TaureanMaulerBase = require("../setARC/TaureanMauler.js");

class TaureanMauler extends TaureanMaulerBase {
  constructor(game) {
    super(game, "Taurean Mauler", "Planechase", "HOP");
  }
}

module.exports = TaureanMauler;
