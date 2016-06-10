"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LongForgottenGohei extends UnimplementedCard {
  constructor (game) {
    super(game, "Long-Forgotten Gohei", "Champions of Kamigawa", "CHK");
  }
}

module.exports = LongForgottenGohei;
