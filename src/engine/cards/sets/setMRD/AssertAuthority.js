"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssertAuthority extends UnimplementedCard {
  constructor (game) {
    super(game, "Assert Authority", "Mirrodin", "MRD");
  }
}

module.exports = AssertAuthority;
