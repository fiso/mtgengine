"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrypticCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Cryptic Command", "Iconic Masters", "IMA");
  }
}

module.exports = CrypticCommand;
