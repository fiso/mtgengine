"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StensiaMasquerade extends UnimplementedCard {
  constructor(game) {
    super(game, "Stensia Masquerade", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StensiaMasquerade;
