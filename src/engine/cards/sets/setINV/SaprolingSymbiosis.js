"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaprolingSymbiosis extends UnimplementedCard {
  constructor (game) {
    super(game, "Saproling Symbiosis", "Invasion", "INV");
  }
}

module.exports = SaprolingSymbiosis;
