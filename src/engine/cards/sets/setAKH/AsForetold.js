"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AsForetold extends UnimplementedCard {
  constructor (game) {
    super(game, "As Foretold", "Amonkhet", "AKH");
  }
}

module.exports = AsForetold;
