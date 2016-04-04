"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoughshodMentor extends Card {
  constructor(game) {
    super(game, "Roughshod Mentor", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RoughshodMentor;
