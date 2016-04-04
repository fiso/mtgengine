"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ransack extends UnimplementedCard {
  constructor(game) {
    super(game, "Ransack", "Starter 1999", "S99");
  }
}

module.exports = Ransack;
