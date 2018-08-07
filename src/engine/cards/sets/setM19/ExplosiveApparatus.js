"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveApparatus extends UnimplementedCard {
  constructor (game) {
    super(game, "Explosive Apparatus", "Core Set 2019", "M19");
  }
}

module.exports = ExplosiveApparatus;
