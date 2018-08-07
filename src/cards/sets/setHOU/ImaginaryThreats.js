"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImaginaryThreats extends UnimplementedCard {
  constructor (game) {
    super(game, "Imaginary Threats", "Hour of Devastation", "HOU");
  }
}

module.exports = ImaginaryThreats;
