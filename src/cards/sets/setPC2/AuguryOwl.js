"use strict";
const Constants = require ("../../../Constants");
const AuguryOwlBase = require("../setPCA/AuguryOwl");

class AuguryOwl extends AuguryOwlBase {
  constructor (game) {
    super(game, "Augury Owl", "Planechase 2012", "PC2");
  }
}

module.exports = AuguryOwl;
