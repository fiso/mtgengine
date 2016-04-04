"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LashoftheWhip extends Card {
  constructor(game) {
    super(game, "Lash of the Whip", "Theros", "THS");
  }
}

module.exports = LashoftheWhip;
