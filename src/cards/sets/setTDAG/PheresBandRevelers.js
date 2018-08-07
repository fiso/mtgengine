"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PheresBandRevelers extends UnimplementedCard {
  constructor (game) {
    super(game, "Pheres-Band Revelers", "Defeat a God", "TDAG");
  }
}

module.exports = PheresBandRevelers;
