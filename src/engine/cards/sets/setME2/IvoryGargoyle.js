"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Gargoyle", "Masters Edition II", "ME2");
  }
}

module.exports = IvoryGargoyle;
