"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpalineUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Opaline Unicorn", "Theros", "THS");
  }
}

module.exports = OpalineUnicorn;
