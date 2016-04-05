"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TelekineticBonds extends UnimplementedCard {
  constructor(game) {
    super(game, "Telekinetic Bonds", "Judgment", "JUD");
  }
}

module.exports = TelekineticBonds;
