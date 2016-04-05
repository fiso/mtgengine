"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LanternLitGraveyard extends UnimplementedCard {
  constructor(game) {
    super(game, "Lantern-Lit Graveyard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LanternLitGraveyard;
