"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrsTomb extends Card {
  constructor(game) {
    super(game, "Martyrs' Tomb", "Apocalypse", "APC");
  }
}

module.exports = MartyrsTomb;
