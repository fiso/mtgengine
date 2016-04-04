"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimTutor extends Card {
  constructor(game) {
    super(game, "Grim Tutor", "Masters Edition III", "ME3");
  }
}

module.exports = GrimTutor;
