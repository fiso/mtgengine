"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OathofGideon extends Card {
  constructor(game) {
    super(game, "Oath of Gideon", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofGideon;
