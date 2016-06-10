"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enlarge extends UnimplementedCard {
  constructor (game) {
    super(game, "Enlarge", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Enlarge;
