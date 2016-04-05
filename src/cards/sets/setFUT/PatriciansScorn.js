"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatriciansScorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Patrician's Scorn", "Future Sight", "FUT");
  }
}

module.exports = PatriciansScorn;
