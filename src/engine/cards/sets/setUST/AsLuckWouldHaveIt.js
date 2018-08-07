"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AsLuckWouldHaveIt extends UnimplementedCard {
  constructor (game) {
    super(game, "As Luck Would Have It", "Unstable", "UST");
  }
}

module.exports = AsLuckWouldHaveIt;
