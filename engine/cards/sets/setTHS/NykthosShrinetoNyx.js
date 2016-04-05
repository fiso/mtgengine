"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NykthosShrinetoNyx extends UnimplementedCard {
  constructor(game) {
    super(game, "Nykthos, Shrine to Nyx", "Theros", "THS");
  }
}

module.exports = NykthosShrinetoNyx;
