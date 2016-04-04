"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenyReality extends UnimplementedCard {
  constructor(game) {
    super(game, "Deny Reality", "Alara Reborn", "ARB");
  }
}

module.exports = DenyReality;
