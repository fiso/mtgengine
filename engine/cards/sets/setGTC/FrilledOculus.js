"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrilledOculus extends UnimplementedCard {
  constructor(game) {
    super(game, "Frilled Oculus", "Gatecrash", "GTC");
  }
}

module.exports = FrilledOculus;
