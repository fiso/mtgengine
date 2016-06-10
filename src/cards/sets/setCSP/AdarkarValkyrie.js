"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdarkarValkyrie extends UnimplementedCard {
  constructor (game) {
    super(game, "Adarkar Valkyrie", "Coldsnap", "CSP");
  }
}

module.exports = AdarkarValkyrie;
