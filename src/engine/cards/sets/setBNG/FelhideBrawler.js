"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FelhideBrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Felhide Brawler", "Born of the Gods", "BNG");
  }
}

module.exports = FelhideBrawler;
