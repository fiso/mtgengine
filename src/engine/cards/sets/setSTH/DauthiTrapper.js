"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DauthiTrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Dauthi Trapper", "Stronghold", "STH");
  }
}

module.exports = DauthiTrapper;
