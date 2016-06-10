"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OxiddaGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Oxidda Golem", "Darksteel", "DST");
  }
}

module.exports = OxiddaGolem;
