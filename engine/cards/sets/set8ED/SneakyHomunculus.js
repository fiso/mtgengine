"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SneakyHomunculus extends Card {
  constructor(game) {
    super(game, "Sneaky Homunculus", "Eighth Edition", "8ED");
  }
}

module.exports = SneakyHomunculus;
