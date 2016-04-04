"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TakeUpArms extends Card {
  constructor(game) {
    super(game, "Take Up Arms", "Khans of Tarkir", "KTK");
  }
}

module.exports = TakeUpArms;
