"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiUnderminer extends UnimplementedCard {
  constructor (game) {
    super(game, "Akki Underminer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = AkkiUnderminer;
