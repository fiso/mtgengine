"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carnassid extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnassid", "Stronghold", "STH");
  }
}

module.exports = Carnassid;
