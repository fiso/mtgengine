"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DirtyWererat extends UnimplementedCard {
  constructor (game) {
    super(game, "Dirty Wererat", "Hachette UK", "PHUK");
  }
}

module.exports = DirtyWererat;
