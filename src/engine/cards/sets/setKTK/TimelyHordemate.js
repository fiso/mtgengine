"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimelyHordemate extends UnimplementedCard {
  constructor (game) {
    super(game, "Timely Hordemate", "Khans of Tarkir", "KTK");
  }
}

module.exports = TimelyHordemate;
