"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hellfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellfire", "Masters Edition III", "ME3");
  }
}

module.exports = Hellfire;
