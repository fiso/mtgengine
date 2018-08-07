"use strict";
const Constants = require ("../../../Constants");
const ImprisonedintheMoonBase = require("../setEMN/ImprisonedintheMoon");

class ImprisonedintheMoon extends ImprisonedintheMoonBase {
  constructor (game) {
    super(game, "Imprisoned in the Moon", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = ImprisonedintheMoon;
