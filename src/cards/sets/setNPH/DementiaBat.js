"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DementiaBat extends UnimplementedCard {
  constructor(game) {
    super(game, "Dementia Bat", "New Phyrexia", "NPH");
  }
}

module.exports = DementiaBat;
