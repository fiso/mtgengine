"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CaoRenWeiCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Cao Ren, Wei Commander", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaoRenWeiCommander;
