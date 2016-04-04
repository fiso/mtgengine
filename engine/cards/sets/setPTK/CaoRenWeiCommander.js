"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaoRenWeiCommander extends Card {
  constructor(game) {
    super(game, "Cao Ren, Wei Commander", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaoRenWeiCommander;
