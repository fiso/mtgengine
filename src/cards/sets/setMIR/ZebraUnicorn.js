"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZebraUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Zebra Unicorn", "Mirage", "MIR");
  }
}

module.exports = ZebraUnicorn;
