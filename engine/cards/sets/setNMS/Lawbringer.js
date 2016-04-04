"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Lawbringer extends Card {
  constructor(game) {
    super(game, "Lawbringer", "Nemesis", "NMS");
  }
}

module.exports = Lawbringer;
