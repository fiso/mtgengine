"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavaenElves extends UnimplementedCard {
  constructor(game) {
    super(game, "Savaen Elves", "The Dark", "DRK");
  }
}

module.exports = SavaenElves;
