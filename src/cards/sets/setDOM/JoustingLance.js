"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoustingLance extends UnimplementedCard {
  constructor (game) {
    super(game, "Jousting Lance", "Dominaria", "DOM");
  }
}

module.exports = JoustingLance;
