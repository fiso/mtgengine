"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Portcullis extends UnimplementedCard {
  constructor (game) {
    super(game, "Portcullis", "Stronghold", "STH");
  }
}

module.exports = Portcullis;
