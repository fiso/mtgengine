"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Backslide extends UnimplementedCard {
  constructor (game) {
    super(game, "Backslide", "Onslaught", "ONS");
  }
}

module.exports = Backslide;
