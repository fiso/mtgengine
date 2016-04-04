"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kismet extends Card {
  constructor(game) {
    super(game, "Kismet", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Kismet;
