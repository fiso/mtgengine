"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seahunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Seahunter", "Nemesis", "NEM");
  }
}

module.exports = Seahunter;
