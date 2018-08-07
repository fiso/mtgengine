"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaoRenWeiCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Cao Ren, Wei Commander", "You Make the Cube", "PZ2");
  }
}

module.exports = CaoRenWeiCommander;
