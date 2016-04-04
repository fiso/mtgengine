"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimelyHordemate extends Card {
  constructor(game) {
    super(game, "Timely Hordemate", "Khans of Tarkir", "KTK");
  }
}

module.exports = TimelyHordemate;
