"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CracklingPerimeter extends UnimplementedCard {
  constructor (game) {
    super(game, "Crackling Perimeter", "Gatecrash", "GTC");
  }
}

module.exports = CracklingPerimeter;
