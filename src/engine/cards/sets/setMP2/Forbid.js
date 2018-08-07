"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Forbid extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbid", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Forbid;
