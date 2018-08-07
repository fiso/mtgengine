"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Dragon", "Masters Edition II", "ME2");
  }
}

module.exports = FireDragon;
