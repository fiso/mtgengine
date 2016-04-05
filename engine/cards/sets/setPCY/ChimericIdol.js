"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimericIdol extends UnimplementedCard {
  constructor(game) {
    super(game, "Chimeric Idol", "Prophecy", "PCY");
  }
}

module.exports = ChimericIdol;
