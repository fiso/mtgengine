"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KuroPitlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Kuro, Pitlord", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KuroPitlord;
