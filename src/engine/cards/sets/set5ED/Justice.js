"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Justice extends UnimplementedCard {
  constructor (game) {
    super(game, "Justice", "Fifth Edition", "5ED");
  }
}

module.exports = Justice;
