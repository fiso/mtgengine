"use strict";
const Constants = require ("../../../Constants");
const AuguryOwlBase = require("../setDDI/AuguryOwl");

class AuguryOwl extends AuguryOwlBase {
  constructor (game) {
    super(game, "Augury Owl", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = AuguryOwl;
