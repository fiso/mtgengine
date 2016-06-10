"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Sentinel", "Chronicles", "CHR");
  }
}

module.exports = Sentinel;
