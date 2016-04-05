"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandSquid extends UnimplementedCard {
  constructor(game) {
    super(game, "Sand Squid", "Mercadian Masques", "MMQ");
  }
}

module.exports = SandSquid;
