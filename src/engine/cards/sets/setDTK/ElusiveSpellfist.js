"use strict";
const Constants = require ("../../../Constants");
const ElusiveSpellfistBase = require("../setIMA/ElusiveSpellfist");

class ElusiveSpellfist extends ElusiveSpellfistBase {
  constructor (game) {
    super(game, "Elusive Spellfist", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ElusiveSpellfist;
