"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessingofLeeches extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessing of Leeches", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlessingofLeeches;
