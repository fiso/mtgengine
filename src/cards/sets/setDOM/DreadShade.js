"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread Shade", "Dominaria", "DOM");
  }
}

module.exports = DreadShade;
