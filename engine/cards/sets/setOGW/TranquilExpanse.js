"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TranquilExpanse extends Card {
  constructor(game) {
    super(game, "Tranquil Expanse", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TranquilExpanse;
