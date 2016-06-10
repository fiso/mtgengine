"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KodamasMight extends UnimplementedCard {
  constructor (game) {
    super(game, "Kodama's Might", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KodamasMight;
