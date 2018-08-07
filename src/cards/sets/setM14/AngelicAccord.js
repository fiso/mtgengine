"use strict";
const Constants = require ("../../../Constants");
const AngelicAccordBase = require("../setIMA/AngelicAccord");

class AngelicAccord extends AngelicAccordBase {
  constructor (game) {
    super(game, "Angelic Accord", "Magic 2014", "M14");
  }
}

module.exports = AngelicAccord;
