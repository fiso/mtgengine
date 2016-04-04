"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BecomeImmense extends Card {
  constructor(game) {
    super(game, "Become Immense", "Khans of Tarkir", "KTK");
  }
}

module.exports = BecomeImmense;
