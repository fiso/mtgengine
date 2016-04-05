"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UginsNexus extends UnimplementedCard {
  constructor(game) {
    super(game, "Ugin's Nexus", "Khans of Tarkir", "KTK");
  }
}

module.exports = UginsNexus;
