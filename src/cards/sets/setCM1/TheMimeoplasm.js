"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheMimeoplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "The Mimeoplasm", "Commander's Arsenal", "CM1");
  }
}

module.exports = TheMimeoplasm;
