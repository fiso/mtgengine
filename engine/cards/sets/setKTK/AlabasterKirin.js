"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabasterKirin extends Card {
  constructor(game) {
    super(game, "Alabaster Kirin", "Khans of Tarkir", "KTK");
  }
}

module.exports = AlabasterKirin;
