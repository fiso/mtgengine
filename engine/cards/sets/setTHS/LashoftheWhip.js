"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LashoftheWhip extends UnimplementedCard {
  constructor(game) {
    super(game, "Lash of the Whip", "Theros", "THS");
  }
}

module.exports = LashoftheWhip;
