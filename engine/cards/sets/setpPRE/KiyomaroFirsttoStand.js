"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiyomaroFirsttoStand extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiyomaro, First to Stand", "Prerelease Events", "pPRE");
  }
}

module.exports = KiyomaroFirsttoStand;
