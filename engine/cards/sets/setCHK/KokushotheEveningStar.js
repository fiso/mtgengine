"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KokushotheEveningStar extends UnimplementedCard {
  constructor(game) {
    super(game, "Kokusho, the Evening Star", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KokushotheEveningStar;
