"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HunttheHunter extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunt the Hunter", "Theros", "THS");
  }
}

module.exports = HunttheHunter;
