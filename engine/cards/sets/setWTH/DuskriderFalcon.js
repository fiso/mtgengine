"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuskriderFalcon extends UnimplementedCard {
  constructor(game) {
    super(game, "Duskrider Falcon", "Weatherlight", "WTH");
  }
}

module.exports = DuskriderFalcon;
