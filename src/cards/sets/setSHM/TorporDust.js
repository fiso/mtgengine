"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorporDust extends UnimplementedCard {
  constructor(game) {
    super(game, "Torpor Dust", "Shadowmoor", "SHM");
  }
}

module.exports = TorporDust;
