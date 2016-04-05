"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Trollhide extends UnimplementedCard {
  constructor(game) {
    super(game, "Trollhide", "Magic 2012", "M12");
  }
}

module.exports = Trollhide;
