"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TattooWard extends Card {
  constructor(game) {
    super(game, "Tattoo Ward", "Odyssey", "ODY");
  }
}

module.exports = TattooWard;
