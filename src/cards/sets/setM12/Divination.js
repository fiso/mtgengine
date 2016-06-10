"use strict";
const Constants = require ("../../../Constants");
const DivinationBase = require("../setBNG/Divination");

class Divination extends DivinationBase {
  constructor (game) {
    super(game, "Divination", "Magic 2012", "M12");
  }
}

module.exports = Divination;
