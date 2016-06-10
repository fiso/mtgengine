"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanRanger extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Ranger", "Commander 2014", "C14");
  }
}

module.exports = SylvanRanger;
