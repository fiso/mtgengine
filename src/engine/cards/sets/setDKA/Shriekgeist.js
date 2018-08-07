"use strict";
const Constants = require ("../../../Constants");
const ShriekgeistBase = require("../setIMA/Shriekgeist");

class Shriekgeist extends ShriekgeistBase {
  constructor (game) {
    super(game, "Shriekgeist", "Dark Ascension", "DKA");
  }
}

module.exports = Shriekgeist;
