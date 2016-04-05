"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupremeInquisitor extends UnimplementedCard {
  constructor(game) {
    super(game, "Supreme Inquisitor", "Onslaught", "ONS");
  }
}

module.exports = SupremeInquisitor;
