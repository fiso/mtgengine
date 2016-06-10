"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrensRunPackmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Wren's Run Packmaster", "Commander 2014", "C14");
  }
}

module.exports = WrensRunPackmaster;
