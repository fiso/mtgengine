"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurchingRotbeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurching Rotbeast", "Hour of Devastation", "HOU");
  }
}

module.exports = LurchingRotbeast;
