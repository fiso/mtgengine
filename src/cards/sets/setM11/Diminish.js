"use strict";
const Constants = require ("../../../Constants");
const DiminishBase = require("../setIMA/Diminish");

class Diminish extends DiminishBase {
  constructor (game) {
    super(game, "Diminish", "Magic 2011", "M11");
  }
}

module.exports = Diminish;
