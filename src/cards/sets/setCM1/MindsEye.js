"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindsEye extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind's Eye", "Commander's Arsenal", "CM1");
  }
}

module.exports = MindsEye;
