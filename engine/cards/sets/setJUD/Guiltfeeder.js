"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Guiltfeeder extends UnimplementedCard {
  constructor(game) {
    super(game, "Guiltfeeder", "Judgment", "JUD");
  }
}

module.exports = Guiltfeeder;
