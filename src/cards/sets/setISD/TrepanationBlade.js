"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrepanationBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Trepanation Blade", "Innistrad", "ISD");
  }
}

module.exports = TrepanationBlade;
