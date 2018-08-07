"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Strike", "Prophecy", "PCY");
  }
}

module.exports = MirrorStrike;
