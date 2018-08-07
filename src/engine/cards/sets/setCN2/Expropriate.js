"use strict";
const Constants = require ("../../../Constants");
const ExpropriateBase = require("../setPZ2/Expropriate");

class Expropriate extends ExpropriateBase {
  constructor (game) {
    super(game, "Expropriate", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Expropriate;
