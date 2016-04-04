"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaoistMystic extends Card {
  constructor(game) {
    super(game, "Taoist Mystic", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = TaoistMystic;
