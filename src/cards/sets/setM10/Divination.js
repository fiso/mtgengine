"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setBNG/Divination");

class Divination extends DivinationBase {
  constructor(game) {
    super(game, "Divination", "Magic 2010", "M10");
  }
}

module.exports = Divination;
