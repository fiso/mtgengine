"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurChieftain extends UnimplementedCard {
  constructor(game) {
    super(game, "Centaur Chieftain", "Torment", "TOR");
  }
}

module.exports = CentaurChieftain;
