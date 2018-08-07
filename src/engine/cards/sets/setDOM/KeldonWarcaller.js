"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonWarcaller extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Warcaller", "Dominaria", "DOM");
  }
}

module.exports = KeldonWarcaller;
