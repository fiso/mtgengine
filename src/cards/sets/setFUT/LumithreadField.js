"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LumithreadField extends UnimplementedCard {
  constructor (game) {
    super(game, "Lumithread Field", "Future Sight", "FUT");
  }
}

module.exports = LumithreadField;
