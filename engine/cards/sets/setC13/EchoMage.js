"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EchoMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Echo Mage", "Commander 2013 Edition", "C13");
  }
}

module.exports = EchoMage;
