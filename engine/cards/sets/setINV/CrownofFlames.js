"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrownofFlames extends UnimplementedCard {
  constructor(game) {
    super(game, "Crown of Flames", "Invasion", "INV");
  }
}

module.exports = CrownofFlames;
