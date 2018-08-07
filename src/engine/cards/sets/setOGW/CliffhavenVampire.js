"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CliffhavenVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Cliffhaven Vampire", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CliffhavenVampire;
