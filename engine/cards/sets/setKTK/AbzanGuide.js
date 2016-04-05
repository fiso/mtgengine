"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Abzan Guide", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanGuide;
