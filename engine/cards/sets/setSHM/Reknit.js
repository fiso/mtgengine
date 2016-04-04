"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reknit extends UnimplementedCard {
  constructor(game) {
    super(game, "Reknit", "Shadowmoor", "SHM");
  }
}

module.exports = Reknit;
