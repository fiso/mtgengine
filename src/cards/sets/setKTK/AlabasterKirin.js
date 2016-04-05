"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabasterKirin extends UnimplementedCard {
  constructor(game) {
    super(game, "Alabaster Kirin", "Khans of Tarkir", "KTK");
  }
}

module.exports = AlabasterKirin;
