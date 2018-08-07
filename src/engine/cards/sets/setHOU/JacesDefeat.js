"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesDefeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Defeat", "Hour of Devastation", "HOU");
  }
}

module.exports = JacesDefeat;
