"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JotunOwlKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Jötun Owl Keeper", "Coldsnap", "CSP");
  }
}

module.exports = JotunOwlKeeper;
