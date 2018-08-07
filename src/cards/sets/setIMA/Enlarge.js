"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enlarge extends UnimplementedCard {
  constructor (game) {
    super(game, "Enlarge", "Iconic Masters", "IMA");
  }
}

module.exports = Enlarge;
