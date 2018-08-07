"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuplicationDevice extends UnimplementedCard {
  constructor (game) {
    super(game, "Duplication Device", "Unstable", "UST");
  }
}

module.exports = DuplicationDevice;
