"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildfireCerberus extends UnimplementedCard {
  constructor(game) {
    super(game, "Wildfire Cerberus", "Journey into Nyx", "JOU");
  }
}

module.exports = WildfireCerberus;
