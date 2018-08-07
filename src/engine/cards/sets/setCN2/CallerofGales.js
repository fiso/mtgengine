"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallerofGales extends UnimplementedCard {
  constructor (game) {
    super(game, "Caller of Gales", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CallerofGales;
