"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KavuHowler extends UnimplementedCard {
  constructor (game) {
    super(game, "Kavu Howler", "Apocalypse", "APC");
  }
}

module.exports = KavuHowler;
