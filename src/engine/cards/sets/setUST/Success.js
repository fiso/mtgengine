"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Success extends UnimplementedCard {
  constructor (game) {
    super(game, "Success!", "Unstable", "UST");
  }
}

module.exports = Success;
