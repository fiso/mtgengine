"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesolationAngel extends Card {
  constructor(game) {
    super(game, "Desolation Angel", "Apocalypse", "APC");
  }
}

module.exports = DesolationAngel;
