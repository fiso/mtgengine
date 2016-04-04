"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrossProwler extends UnimplementedCard {
  constructor(game) {
    super(game, "Dross Prowler", "Mirrodin", "MRD");
  }
}

module.exports = DrossProwler;
