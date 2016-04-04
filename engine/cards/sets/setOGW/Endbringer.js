"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Endbringer extends UnimplementedCard {
  constructor(game) {
    super(game, "Endbringer", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Endbringer;
