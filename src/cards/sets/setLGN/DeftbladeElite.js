"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeftbladeElite extends UnimplementedCard {
  constructor(game) {
    super(game, "Deftblade Elite", "Legions", "LGN");
  }
}

module.exports = DeftbladeElite;
