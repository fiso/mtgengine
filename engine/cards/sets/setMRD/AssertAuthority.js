"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssertAuthority extends Card {
  constructor(game) {
    super(game, "Assert Authority", "Mirrodin", "MRD");
  }
}

module.exports = AssertAuthority;
