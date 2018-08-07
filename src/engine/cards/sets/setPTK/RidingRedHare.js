"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RidingRedHare extends UnimplementedCard {
  constructor (game) {
    super(game, "Riding Red Hare", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RidingRedHare;
