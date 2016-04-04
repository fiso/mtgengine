"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CliffhavenVampire extends Card {
  constructor(game) {
    super(game, "Cliffhaven Vampire", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CliffhavenVampire;
