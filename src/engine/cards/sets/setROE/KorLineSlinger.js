"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorLineSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Line-Slinger", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KorLineSlinger;
