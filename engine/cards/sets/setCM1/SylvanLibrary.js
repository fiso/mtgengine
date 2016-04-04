"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanLibrary extends UnimplementedCard {
  constructor(game) {
    super(game, "Sylvan Library", "Commander's Arsenal", "CM1");
  }
}

module.exports = SylvanLibrary;
