"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishBloodpainter extends UnimplementedCard {
  constructor(game) {
    super(game, "Orcish Bloodpainter", "Coldsnap", "CSP");
  }
}

module.exports = OrcishBloodpainter;
