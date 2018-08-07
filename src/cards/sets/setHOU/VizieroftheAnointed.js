"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizieroftheAnointed extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of the Anointed", "Hour of Devastation", "HOU");
  }
}

module.exports = VizieroftheAnointed;
