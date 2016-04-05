"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChronomanticEscape extends UnimplementedCard {
  constructor(game) {
    super(game, "Chronomantic Escape", "Future Sight", "FUT");
  }
}

module.exports = ChronomanticEscape;
