"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Greatsword extends UnimplementedCard {
  constructor(game) {
    super(game, "Greatsword", "Magic 2012", "M12");
  }
}

module.exports = Greatsword;
