"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RazingSnidd extends Card {
  constructor(game) {
    super(game, "Razing Snidd", "Planeshift", "PLS");
  }
}

module.exports = RazingSnidd;
