"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TattooWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Tattoo Ward", "Odyssey", "ODY");
  }
}

module.exports = TattooWard;
