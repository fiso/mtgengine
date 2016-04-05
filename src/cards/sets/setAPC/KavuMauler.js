"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuMauler extends UnimplementedCard {
  constructor(game) {
    super(game, "Kavu Mauler", "Apocalypse", "APC");
  }
}

module.exports = KavuMauler;
