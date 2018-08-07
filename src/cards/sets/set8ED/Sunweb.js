"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunweb extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunweb", "Eighth Edition", "8ED");
  }
}

module.exports = Sunweb;
