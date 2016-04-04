"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindsEye extends Card {
  constructor(game) {
    super(game, "Mind's Eye", "Commander's Arsenal", "CM1");
  }
}

module.exports = MindsEye;
