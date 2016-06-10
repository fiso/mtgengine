"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JunkGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Junk Golem", "Odyssey", "ODY");
  }
}

module.exports = JunkGolem;
