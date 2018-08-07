"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrestedCraghorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Crested Craghorn", "Legions", "LGN");
  }
}

module.exports = CrestedCraghorn;
