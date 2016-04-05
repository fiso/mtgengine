"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiCoalflinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Akki Coalflinger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = AkkiCoalflinger;
