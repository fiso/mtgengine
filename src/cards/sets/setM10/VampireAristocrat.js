"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireAristocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Aristocrat", "Magic 2010", "M10");
  }
}

module.exports = VampireAristocrat;
