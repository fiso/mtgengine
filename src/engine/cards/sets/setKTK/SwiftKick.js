"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftKick extends UnimplementedCard {
  constructor (game) {
    super(game, "Swift Kick", "Khans of Tarkir", "KTK");
  }
}

module.exports = SwiftKick;
