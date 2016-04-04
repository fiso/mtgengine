"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Sea Spirit", "Fifth Edition", "5ED");
  }
}

module.exports = SeaSpirit;
