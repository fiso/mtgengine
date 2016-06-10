"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EdricSpymasterofTrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Edric, Spymaster of Trest", "Commander's Arsenal", "CM1");
  }
}

module.exports = EdricSpymasterofTrest;
