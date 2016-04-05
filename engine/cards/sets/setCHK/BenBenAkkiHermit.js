"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenBenAkkiHermit extends UnimplementedCard {
  constructor(game) {
    super(game, "Ben-Ben, Akki Hermit", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BenBenAkkiHermit;
