"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PentarchWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Pentarch Ward", "Iconic Masters", "IMA");
  }
}

module.exports = PentarchWard;
