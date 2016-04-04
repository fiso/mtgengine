"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasIndignation extends UnimplementedCard {
  constructor(game) {
    super(game, "Liliana's Indignation", "Shadows over Innistrad", "SOI");
  }
}

module.exports = LilianasIndignation;
