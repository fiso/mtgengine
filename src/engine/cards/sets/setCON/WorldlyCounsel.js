"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorldlyCounsel extends UnimplementedCard {
  constructor (game) {
    super(game, "Worldly Counsel", "Conflux", "CON");
  }
}

module.exports = WorldlyCounsel;
