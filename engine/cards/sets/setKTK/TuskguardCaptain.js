"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TuskguardCaptain extends UnimplementedCard {
  constructor(game) {
    super(game, "Tuskguard Captain", "Khans of Tarkir", "KTK");
  }
}

module.exports = TuskguardCaptain;
