"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricTutor extends Card {
  constructor(game) {
    super(game, "Vampiric Tutor", "Classic Sixth Edition", "6ED");
  }
}

module.exports = VampiricTutor;
