"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorealGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Boreal Griffin", "Coldsnap", "CSP");
  }
}

module.exports = BorealGriffin;
