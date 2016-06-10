"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoicEphemera extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoic Ephemera", "Dissension", "DIS");
  }
}

module.exports = StoicEphemera;
