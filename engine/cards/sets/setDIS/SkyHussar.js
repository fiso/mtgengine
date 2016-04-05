"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyHussar extends UnimplementedCard {
  constructor(game) {
    super(game, "Sky Hussar", "Dissension", "DIS");
  }
}

module.exports = SkyHussar;
