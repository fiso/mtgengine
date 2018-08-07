"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanHierophant extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Hierophant", "Weatherlight", "WTH");
  }
}

module.exports = SylvanHierophant;
