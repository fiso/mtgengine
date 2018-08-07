"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OketrasAvenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Oketra's Avenger", "Hour of Devastation", "HOU");
  }
}

module.exports = OketrasAvenger;
