"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrullRetainer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrull Retainer", "Fallen Empires", "FEM");
  }
}

module.exports = ThrullRetainer;
