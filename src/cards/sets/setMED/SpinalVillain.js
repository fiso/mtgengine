"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpinalVillain extends UnimplementedCard {
  constructor (game) {
    super(game, "Spinal Villain", "Masters Edition", "MED");
  }
}

module.exports = SpinalVillain;
