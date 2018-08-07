"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizieroftheTrue extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of the True", "Hour of Devastation", "HOU");
  }
}

module.exports = VizieroftheTrue;
