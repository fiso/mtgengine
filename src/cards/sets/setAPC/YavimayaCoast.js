"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaCoast extends UnimplementedCard {
  constructor (game) {
    super(game, "Yavimaya Coast", "Apocalypse", "APC");
  }
}

module.exports = YavimayaCoast;
