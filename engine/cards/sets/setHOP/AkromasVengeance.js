"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkromasVengeanceBase = require("../setV13/AkromasVengeance.js");

class AkromasVengeance extends AkromasVengeanceBase {
  constructor(game) {
    super(game, "Akroma's Vengeance", "Planechase", "HOP");
  }
}

module.exports = AkromasVengeance;
