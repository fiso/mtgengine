"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnsnaringBridge extends UnimplementedCard {
  constructor(game) {
    super(game, "Ensnaring Bridge", "Eighth Edition", "8ED");
  }
}

module.exports = EnsnaringBridge;
