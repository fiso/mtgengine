"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlaughterCry extends UnimplementedCard {
  constructor(game) {
    super(game, "Slaughter Cry", "Magic 2012", "M12");
  }
}

module.exports = SlaughterCry;
