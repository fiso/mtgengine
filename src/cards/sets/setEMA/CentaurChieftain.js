"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurChieftain extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Chieftain", "Eternal Masters", "EMA");
  }
}

module.exports = CentaurChieftain;
