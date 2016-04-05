"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalderaHellion extends UnimplementedCard {
  constructor(game) {
    super(game, "Caldera Hellion", "Shards of Alara", "ALA");
  }
}

module.exports = CalderaHellion;
