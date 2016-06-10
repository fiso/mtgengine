"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OdylicWraith extends UnimplementedCard {
  constructor (game) {
    super(game, "Odylic Wraith", "Weatherlight", "WTH");
  }
}

module.exports = OdylicWraith;
