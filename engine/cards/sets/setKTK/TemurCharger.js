"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemurCharger extends Card {
  constructor(game) {
    super(game, "Temur Charger", "Khans of Tarkir", "KTK");
  }
}

module.exports = TemurCharger;
