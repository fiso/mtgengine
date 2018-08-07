"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerimeterCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Perimeter Captain", "Worldwake", "WWK");
  }
}

module.exports = PerimeterCaptain;
