"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhantomBeast extends Card {
  constructor(game) {
    super(game, "Phantom Beast", "Magic 2011", "M11");
  }
}

module.exports = PhantomBeast;
