"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Machinate extends UnimplementedCard {
  constructor(game) {
    super(game, "Machinate", "Darksteel", "DST");
  }
}

module.exports = Machinate;
