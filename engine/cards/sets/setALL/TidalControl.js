"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TidalControl extends UnimplementedCard {
  constructor(game) {
    super(game, "Tidal Control", "Alliances", "ALL");
  }
}

module.exports = TidalControl;
