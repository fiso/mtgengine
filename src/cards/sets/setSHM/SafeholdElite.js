"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafeholdElite extends UnimplementedCard {
  constructor (game) {
    super(game, "Safehold Elite", "Shadowmoor", "SHM");
  }
}

module.exports = SafeholdElite;
