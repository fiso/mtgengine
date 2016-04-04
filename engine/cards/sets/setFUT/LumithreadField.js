"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LumithreadField extends Card {
  constructor(game) {
    super(game, "Lumithread Field", "Future Sight", "FUT");
  }
}

module.exports = LumithreadField;
