"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeverSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Sever Soul", "Hachette UK", "PHUK");
  }
}

module.exports = SeverSoul;
