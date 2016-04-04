"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lightbringer extends Card {
  constructor(game) {
    super(game, "Lightbringer", "Nemesis", "NMS");
  }
}

module.exports = Lightbringer;
