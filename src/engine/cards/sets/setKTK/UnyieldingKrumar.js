"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnyieldingKrumar extends UnimplementedCard {
  constructor (game) {
    super(game, "Unyielding Krumar", "Khans of Tarkir", "KTK");
  }
}

module.exports = UnyieldingKrumar;
