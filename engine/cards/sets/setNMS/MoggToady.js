"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoggToady extends Card {
  constructor(game) {
    super(game, "Mogg Toady", "Nemesis", "NMS");
  }
}

module.exports = MoggToady;
