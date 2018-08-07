"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImminentDoom extends UnimplementedCard {
  constructor (game) {
    super(game, "Imminent Doom", "Hour of Devastation", "HOU");
  }
}

module.exports = ImminentDoom;
