"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Overmaster", "Torment", "TOR");
  }
}

module.exports = Overmaster;
