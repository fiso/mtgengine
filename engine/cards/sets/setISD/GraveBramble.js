"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveBramble extends UnimplementedCard {
  constructor(game) {
    super(game, "Grave Bramble", "Innistrad", "ISD");
  }
}

module.exports = GraveBramble;
