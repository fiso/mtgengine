"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireAristocrat extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Aristocrat", "Modern Masters 2017", "MM3");
  }
}

module.exports = VampireAristocrat;
