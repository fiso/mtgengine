"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadlessSkaab extends UnimplementedCard {
  constructor (game) {
    super(game, "Headless Skaab", "Dark Ascension", "DKA");
  }
}

module.exports = HeadlessSkaab;
