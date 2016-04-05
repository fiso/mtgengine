"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiftstonePortal extends UnimplementedCard {
  constructor(game) {
    super(game, "Riftstone Portal", "Judgment", "JUD");
  }
}

module.exports = RiftstonePortal;
