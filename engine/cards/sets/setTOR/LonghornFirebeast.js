"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LonghornFirebeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Longhorn Firebeast", "Torment", "TOR");
  }
}

module.exports = LonghornFirebeast;
