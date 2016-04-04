"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DecoratedGriffin extends Card {
  constructor(game) {
    super(game, "Decorated Griffin", "Theros", "THS");
  }
}

module.exports = DecoratedGriffin;
