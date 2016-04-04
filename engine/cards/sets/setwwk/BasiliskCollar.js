"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BasiliskCollar extends UnimplementedCard {
  constructor(game) {
    super(game, "Basilisk Collar", "Worldwake", "WWK");
  }
}

module.exports = BasiliskCollar;
