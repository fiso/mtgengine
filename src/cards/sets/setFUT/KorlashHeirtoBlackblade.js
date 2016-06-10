"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorlashHeirtoBlackblade extends UnimplementedCard {
  constructor (game) {
    super(game, "Korlash, Heir to Blackblade", "Future Sight", "FUT");
  }
}

module.exports = KorlashHeirtoBlackblade;
