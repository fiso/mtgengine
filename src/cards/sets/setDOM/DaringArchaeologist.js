"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringArchaeologist extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Archaeologist", "Dominaria", "DOM");
  }
}

module.exports = DaringArchaeologist;
