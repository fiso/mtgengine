"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Worship extends UnimplementedCard {
  constructor (game) {
    super(game, "Worship", "Eighth Edition", "8ED");
  }
}

module.exports = Worship;
