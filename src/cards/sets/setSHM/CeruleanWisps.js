"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CeruleanWisps extends UnimplementedCard {
  constructor (game) {
    super(game, "Cerulean Wisps", "Shadowmoor", "SHM");
  }
}

module.exports = CeruleanWisps;
