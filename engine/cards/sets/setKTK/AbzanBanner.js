"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanBanner extends UnimplementedCard {
  constructor(game) {
    super(game, "Abzan Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanBanner;
