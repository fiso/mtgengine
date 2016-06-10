"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Golem", "Magic 2012", "M12");
  }
}

module.exports = ThranGolem;
