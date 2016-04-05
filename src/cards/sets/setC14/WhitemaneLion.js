"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhitemaneLion extends UnimplementedCard {
  constructor(game) {
    super(game, "Whitemane Lion", "Commander 2014", "C14");
  }
}

module.exports = WhitemaneLion;
