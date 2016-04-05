"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Browse extends UnimplementedCard {
  constructor(game) {
    super(game, "Browse", "Alliances", "ALL");
  }
}

module.exports = Browse;
