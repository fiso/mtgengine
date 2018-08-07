"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianGrimoire extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Grimoire", "Tempest", "TMP");
  }
}

module.exports = PhyrexianGrimoire;
