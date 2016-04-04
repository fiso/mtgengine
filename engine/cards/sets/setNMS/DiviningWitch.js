"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiviningWitch extends Card {
  constructor(game) {
    super(game, "Divining Witch", "Nemesis", "NMS");
  }
}

module.exports = DiviningWitch;
