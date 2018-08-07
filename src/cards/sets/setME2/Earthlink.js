"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthlink extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthlink", "Masters Edition II", "ME2");
  }
}

module.exports = Earthlink;
