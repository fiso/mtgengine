"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsignOblivion extends UnimplementedCard {
  constructor (game) {
    super(game, "Consign // Oblivion", "Hour of Devastation", "HOU");
  }
}

module.exports = ConsignOblivion;
