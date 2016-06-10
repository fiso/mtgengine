"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cloudpost extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloudpost", "Friday Night Magic", "pFNM");
  }
}

module.exports = Cloudpost;
