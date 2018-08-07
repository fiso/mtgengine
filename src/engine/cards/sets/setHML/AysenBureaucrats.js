"use strict";
const Constants = require ("../../../Constants");
const AysenBureaucratsBase = require("../setME2/AysenBureaucrats");

class AysenBureaucrats extends AysenBureaucratsBase {
  constructor (game) {
    super(game, "Aysen Bureaucrats", "Homelands", "HML");
  }
}

module.exports = AysenBureaucrats;
