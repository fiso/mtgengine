"use strict";
const Constants = require ("../../../Constants");
const PraetorsCounselBase = require("../setCMA/PraetorsCounsel");

class PraetorsCounsel extends PraetorsCounselBase {
  constructor (game) {
    super(game, "Praetor's Counsel", "Commander 2014", "C14");
  }
}

module.exports = PraetorsCounsel;
