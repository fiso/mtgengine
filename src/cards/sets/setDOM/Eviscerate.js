"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eviscerate extends UnimplementedCard {
  constructor (game) {
    super(game, "Eviscerate", "Dominaria", "DOM");
  }
}

module.exports = Eviscerate;
