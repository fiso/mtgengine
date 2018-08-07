"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NayaSojourners extends UnimplementedCard {
  constructor (game) {
    super(game, "Naya Sojourners", "Magic 2010 Promos", "PM10");
  }
}

module.exports = NayaSojourners;
