"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReadtheBones extends UnimplementedCard {
  constructor (game) {
    super(game, "Read the Bones", "Commander 2017", "C17");
  }
}

module.exports = ReadtheBones;
