"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dematerialize extends Card {
  constructor(game) {
    super(game, "Dematerialize", "Odyssey", "ODY");
  }
}

module.exports = Dematerialize;
