"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtheriumSculptor extends UnimplementedCard {
  constructor(game) {
    super(game, "Etherium Sculptor", "Modern Masters", "MMA");
  }
}

module.exports = EtheriumSculptor;
