"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tunnel extends Card {
  constructor(game) {
    super(game, "Tunnel", "Collector's Edition", "CED");
  }
}

module.exports = Tunnel;
