"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScryingSheets extends UnimplementedCard {
  constructor(game) {
    super(game, "Scrying Sheets", "Coldsnap", "CSP");
  }
}

module.exports = ScryingSheets;
