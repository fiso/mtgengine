"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManicScribe extends UnimplementedCard {
  constructor(game) {
    super(game, "Manic Scribe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ManicScribe;
