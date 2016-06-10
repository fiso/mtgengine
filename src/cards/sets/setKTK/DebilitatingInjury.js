"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DebilitatingInjury extends UnimplementedCard {
  constructor (game) {
    super(game, "Debilitating Injury", "Khans of Tarkir", "KTK");
  }
}

module.exports = DebilitatingInjury;
