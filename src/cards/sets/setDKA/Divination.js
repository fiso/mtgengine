"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setBNG/Divination");

class Divination extends DivinationBase {
  constructor (game) {
    super(game, "Divination", "Dark Ascension", "DKA");
  }
}

module.exports = Divination;
