"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JötunOwlKeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Jötun Owl Keeper", "Coldsnap", "CSP");
  }
}

module.exports = JötunOwlKeeper;
