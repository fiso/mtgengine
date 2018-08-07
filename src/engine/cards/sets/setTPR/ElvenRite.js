"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenRite extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Rite", "Tempest Remastered", "TPR");
  }
}

module.exports = ElvenRite;
