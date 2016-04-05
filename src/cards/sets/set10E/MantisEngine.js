"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MantisEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Mantis Engine", "Tenth Edition", "10E");
  }
}

module.exports = MantisEngine;
