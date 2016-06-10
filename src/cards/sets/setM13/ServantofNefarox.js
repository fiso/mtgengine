"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ServantofNefarox extends UnimplementedCard {
  constructor (game) {
    super(game, "Servant of Nefarox", "Magic 2013", "M13");
  }
}

module.exports = ServantofNefarox;
