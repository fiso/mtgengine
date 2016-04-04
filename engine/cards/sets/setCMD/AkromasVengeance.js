"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkromasVengeanceBase = require("../setV13/AkromasVengeance.js");

class AkromasVengeance extends AkromasVengeanceBase {
  constructor(game) {
    super(game, "Akroma's Vengeance", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AkromasVengeance;
