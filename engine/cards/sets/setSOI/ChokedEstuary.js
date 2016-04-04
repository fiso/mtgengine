"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChokedEstuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Choked Estuary", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ChokedEstuary;
