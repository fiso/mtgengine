"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PriestofYawgmoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Priest of Yawgmoth", "Antiquities", "ATQ");
  }
}

module.exports = PriestofYawgmoth;
