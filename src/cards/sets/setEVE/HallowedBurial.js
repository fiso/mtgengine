"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedBurial extends UnimplementedCard {
  constructor(game) {
    super(game, "Hallowed Burial", "Eventide", "EVE");
  }
}

module.exports = HallowedBurial;
