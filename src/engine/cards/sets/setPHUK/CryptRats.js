"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CryptRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Crypt Rats", "Hachette UK", "PHUK");
  }
}

module.exports = CryptRats;
