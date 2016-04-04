"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Safeguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Safeguard", "Tempest", "TMP");
  }
}

module.exports = Safeguard;
