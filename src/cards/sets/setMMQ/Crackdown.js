"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crackdown extends UnimplementedCard {
  constructor (game) {
    super(game, "Crackdown", "Mercadian Masques", "MMQ");
  }
}

module.exports = Crackdown;
