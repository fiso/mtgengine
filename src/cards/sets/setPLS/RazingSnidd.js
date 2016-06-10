"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazingSnidd extends UnimplementedCard {
  constructor (game) {
    super(game, "Razing Snidd", "Planeshift", "PLS");
  }
}

module.exports = RazingSnidd;
