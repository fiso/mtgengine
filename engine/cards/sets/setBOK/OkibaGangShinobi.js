"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OkibaGangShinobi extends UnimplementedCard {
  constructor(game) {
    super(game, "Okiba-Gang Shinobi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OkibaGangShinobi;
