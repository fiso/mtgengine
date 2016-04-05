"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmergeUnscathed extends UnimplementedCard {
  constructor(game) {
    super(game, "Emerge Unscathed", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = EmergeUnscathed;
