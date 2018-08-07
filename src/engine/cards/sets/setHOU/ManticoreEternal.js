"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManticoreEternal extends UnimplementedCard {
  constructor (game) {
    super(game, "Manticore Eternal", "Hour of Devastation", "HOU");
  }
}

module.exports = ManticoreEternal;
