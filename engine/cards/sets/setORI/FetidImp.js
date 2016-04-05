"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FetidImp extends UnimplementedCard {
  constructor(game) {
    super(game, "Fetid Imp", "Magic Origins", "ORI");
  }
}

module.exports = FetidImp;
