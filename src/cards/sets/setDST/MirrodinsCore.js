"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrodinsCore extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirrodin's Core", "Darksteel", "DST");
  }
}

module.exports = MirrodinsCore;
