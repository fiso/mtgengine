"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Forbid extends UnimplementedCard {
  constructor(game) {
    super(game, "Forbid", "Exodus", "EXO");
  }
}

module.exports = Forbid;
