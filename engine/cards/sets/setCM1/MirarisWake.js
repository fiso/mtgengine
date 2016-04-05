"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirarisWake extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirari's Wake", "Commander's Arsenal", "CM1");
  }
}

module.exports = MirarisWake;
