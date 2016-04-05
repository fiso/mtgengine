"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cloudform extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloudform", "Fate Reforged", "FRF");
  }
}

module.exports = Cloudform;
