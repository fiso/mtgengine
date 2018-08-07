"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImprisonedintheMoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Imprisoned in the Moon", "Eldritch Moon", "EMN");
  }
}

module.exports = ImprisonedintheMoon;
