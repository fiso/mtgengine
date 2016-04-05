"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverKelpie extends UnimplementedCard {
  constructor(game) {
    super(game, "River Kelpie", "Shadowmoor", "SHM");
  }
}

module.exports = RiverKelpie;
