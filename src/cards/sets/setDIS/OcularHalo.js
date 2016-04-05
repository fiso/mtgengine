"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OcularHalo extends UnimplementedCard {
  constructor(game) {
    super(game, "Ocular Halo", "Dissension", "DIS");
  }
}

module.exports = OcularHalo;
