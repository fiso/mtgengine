"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbzanCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Abzan Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanCharm;
