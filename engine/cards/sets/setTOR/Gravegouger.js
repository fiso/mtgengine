"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gravegouger extends Card {
  constructor(game) {
    super(game, "Gravegouger", "Torment", "TOR");
  }
}

module.exports = Gravegouger;
