"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OonasProwler extends UnimplementedCard {
  constructor (game) {
    super(game, "Oona's Prowler", "Lorwyn", "LRW");
  }
}

module.exports = OonasProwler;
