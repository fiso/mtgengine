"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuietDisrepair extends UnimplementedCard {
  constructor(game) {
    super(game, "Quiet Disrepair", "Future Sight", "FUT");
  }
}

module.exports = QuietDisrepair;
