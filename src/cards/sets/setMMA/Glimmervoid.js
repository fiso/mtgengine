"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glimmervoid extends UnimplementedCard {
  constructor (game) {
    super(game, "Glimmervoid", "Modern Masters", "MMA");
  }
}

module.exports = Glimmervoid;
