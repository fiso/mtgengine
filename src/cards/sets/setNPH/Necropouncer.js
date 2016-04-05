"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necropouncer extends UnimplementedCard {
  constructor(game) {
    super(game, "Necropouncer", "New Phyrexia", "NPH");
  }
}

module.exports = Necropouncer;
